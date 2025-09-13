import { recordWatched } from '../services/watchedService.js';

export async function watchedByEmp(req, res) {
  try {
    let { workId, name, department, accountType } = req.body || {};
    workId = (workId || '').trim();
    name = (name || '').trim();
    department = (department || '').trim();
    accountType = (accountType || '').trim();

    if (!workId || !name) {
      return res.status(200).json({ ok: false, message: '缺少必要參數' });
    }
    await recordWatched({ workId, name, department, accountType });
    return res.status(200).json({ ok: true, message: '完成本月影片觀賞的用戶資料插入成功' });
  } catch (err) {
    console.error('emp/watchedUser 插入錯誤:', err);
    return res.status(200).json({ ok: false, message: '影片觀看紀錄上傳失敗' });
  }
}

export async function watchedByVisitor(req, res) {
  try {
    let { sWorkId, sName, sDepartment, sAccountType } = req.body || {};
    const workId = (sWorkId || '').trim();
    const name = (sName || '').trim();
    const department = (sDepartment || '').trim();
    const accountType = (sAccountType || '').trim();

    if (!workId || !name) {
      return res.status(200).json({ ok: false, message: '缺少必要參數' });
    }
    await recordWatched({ workId, name, department, accountType });
    return res.status(200).json({ ok: true, message: '完成本月影片觀賞的用戶資料插入成功' });
  } catch (err) {
    console.error('visitor/watchedUser 插入錯誤:', err);
    return res.status(200).json({ ok: false, message: '影片觀看紀錄上傳失敗' });
  }
}