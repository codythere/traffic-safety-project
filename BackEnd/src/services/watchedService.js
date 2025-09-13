import { insertWatched } from '../dao/watchedDao.js';

export async function recordWatched({ workId, name, department, accountType }) {
  await insertWatched(workId, name, department, accountType);
  return { ok: true };
}