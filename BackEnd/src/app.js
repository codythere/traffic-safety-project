import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';
import { env } from './config/env.js';
import { db1Pool, db2Pool } from './config/db.js';

const app = express();

// Middlewares
app.disable('x-powered-by'); // 移除 Response header : (X-Powered-by: Express) => 避免讓潛在攻擊者知道後端使用的是 Express，可以增加安全性
app.use(helmet()); // 提升 API 基礎安全性 (要稍微注意後續部署後會不會產生問題)
app.use(cors({ origin: env.CORS_ORIGIN.length ? env.CORS_ORIGIN : true })); // 控制前端能不能對 API 發請求 (設成 true 表示允許所有來源)
app.use(express.json()); // 自動解析 request.body => 後續透過類似以下語法取值 : req.body.name ...
app.use(express.urlencoded({ extended: true })); // 讓 Express 解析特定格式資料，通常是 HTML Form 表單
app.use(morgan('tiny')); // 紀錄 HTTP 請求 Log => 可以在 terminal 觀察 Log (EX: GET /api/users 200 12 - 3.142ms ....)

// Routes
app.use('/', routes);

// Start
const server = app.listen(env.PORT, () => {
  console.log(`Node App is running on port ${env.PORT}`);
});

// Graceful shutdown
async function shutdown() {
  console.log('Shutting down...');
  const killTimer = setTimeout(() => {
    console.warn('Force exit');
    process.exit(1);
  }, 8000).unref();

  server.close(async () => {
    console.log('HTTP server closed');
    try {
      await Promise.allSettled([db1Pool.end(), db2Pool.end()]);
      console.log('DB pools closed');
    } finally {
      clearTimeout(killTimer);
      process.exit(0);
    }
  });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);