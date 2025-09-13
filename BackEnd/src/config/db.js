import mysql from 'mysql2/promise';
import { env } from './env.js';

export const db1Pool = mysql.createPool({
  host: env.DB1_HOST,
  user: env.DB1_USER,
  password: env.DB1_PASS,
  database: env.DB1_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8',           // MySQL 5.1 沒有 utf8mb4
});

export const db2Pool = mysql.createPool({
  host: env.DB2_HOST,
  user: env.DB2_USER,
  password: env.DB2_PASS,
  database: env.DB2_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8',
});

// 關鍵：每條新連線設定 session 字集，避免中文變 ???
db1Pool.on('connection', (conn) => { conn.query('SET NAMES utf8'); });
db2Pool.on('connection', (conn) => { conn.query('SET NAMES utf8'); });

// 通用 query helper（單筆 timeout）
export async function q(pool, sql, params, timeout = 2500) {
  const [rows] = await pool.query({ sql, values: params, timeout });
  return rows;
}