import { q, db1Pool, db2Pool } from '../config/db.js';

export async function health(req, res) {
  try {
    const [a, c] = await Promise.all([
      q(db1Pool, 'SELECT 1 AS ok'),
      q(db2Pool, 'SELECT 1 AS ok'),
    ]);
    res.status(200).json({ ok: true, status: 'up', db1: a?.[0]?.ok, db2: c?.[0]?.ok });
  } catch (e) {
    res.status(200).json({ ok: false, status: 'degraded', error: String(e?.message || e) });
  }
}