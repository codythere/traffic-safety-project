import { q, db1Pool } from '../config/db.js';

// 插入或覆蓋（如果你之後表上加 UNIQUE KEY，可改成 ON DUPLICATE）
export async function insertWatched(workId, name, department, accountType, timeout = 2500) {
  const sql = `
    INSERT INTO traffic_safety_monthly_vids_watched_list
      (work_id, name, department, account_type)
    VALUES (?, ?, ?, ?)
  `;
  await q(db1Pool, sql, [workId, name, department, accountType], timeout);
}