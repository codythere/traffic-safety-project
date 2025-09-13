import { findUserInAryByCredentials, findUserInCfByCredentials } from '../dao/userDao.js';
import { sleep } from '../utils/sleep.js';

// 兩庫並行（只查一次，不重打）
export async function loginWithRace({ workId, password }) {
  const aryP = findUserInAryByCredentials(workId, password, 2500)
    .then(u => u ? { ok: true, source: 'ARY', user: u } : { ok: false, source: 'ARY' })
    .catch(() => ({ ok: false, source: 'ARY', error: true }));

  const cfP = findUserInCfByCredentials(workId, password, 2500)
    .then(u => u ? { ok: true, source: 'CF', user: u } : { ok: false, source: 'CF' })
    .catch(() => ({ ok: false, source: 'CF', error: true }));

  // 整體 timeout
  const overallTimeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('overall-timeout')), 3500)
  );

  // 先拿到第一個返回
  const first = await Promise.race([Promise.race([aryP, cfP]), overallTimeout]);

  if (first && first.ok) return first;

  // 若第一個不是命中，再等另一個，但最多 1 秒
  const waitOthers = async () => {
    const [a, c] = await Promise.allSettled([aryP, cfP]);
    const val = s => s.status === 'fulfilled' && s.value?.ok ? s.value : null;
    return val(a) || val(c) || { ok: false };
  };
  return await Promise.race([waitOthers(), sleep(1000).then(() => ({ ok: false, timeout: true }))]);
}