import { loginWithRace } from '../services/authService.js';

export async function login(req, res) {
  try {
    let { workId, password } = req.body || {};
    if (typeof workId !== 'string' || typeof password !== 'string') {
      return res.status(200).json({ ok: false, message: '參數格式錯誤' }); // 你現行用 200；要改 400 也可以
    }
    workId = workId.trim();
    password = password.trim();
    if (!workId || !password) {
      return res.status(200).json({ ok: false, message: '缺少必要參數' });
    }

    const result = await loginWithRace({ workId, password });
    if (result?.ok) {
      return res.status(200).json({
        ok: true, message: '登入驗證成功',
        name: result.user.name, department: result.user.dept, source: result.source
      });
    }
    return res.status(200).json({ ok: false, message: '工號或密碼不符合' });
  } catch (err) {
    console.error('Login error:', err?.message || err);
    return res.status(200).json({ ok: false, message: '系統忙線中，請稍後再試' });
  }
}