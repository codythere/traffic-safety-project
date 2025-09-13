import { db1Pool, db2Pool, q } from '../config/db.js';

// 以帳密查詢兩個資料庫的使用者
export async function findUserInAryByCredentials(workId, password, timeout = 2500) {
  const sql = `
    SELECT name, dept
    FROM array_user_data
    WHERE work_id = ? AND password = ? AND job_status = 1
    LIMIT 1
  `;
  const rows = await q(db1Pool, sql, [workId, password], timeout);
  return rows?.[0] || null;
}

export async function findUserInCfByCredentials(workId, password, timeout = 2500) {
  const sql = `
    SELECT name, dept
    FROM CF_user_data
    WHERE work_id = ? AND password = ? AND job_status = '1'
    LIMIT 1
  `;
  const rows = await q(db2Pool, sql, [workId, password], timeout);
  return rows?.[0] || null;
}