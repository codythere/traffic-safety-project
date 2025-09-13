import 'dotenv/config'; // 會去找專案根目錄底下的 .env檔案

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5500,

  DB1_HOST: process.env.DB1_HOST,
  DB1_USER: process.env.DB1_USER,
  DB1_PASS: process.env.DB1_PASS,
  DB1_NAME: process.env.DB1_NAME,

  DB2_HOST: process.env.DB2_HOST,
  DB2_USER: process.env.DB2_USER,
  DB2_PASS: process.env.DB2_PASS,
  DB2_NAME: process.env.DB2_NAME,

  // 多網域以逗號分隔 (本地測試可不填)
  CORS_ORIGIN: (process.env.CORS_ORIGIN || '').split(',').filter(Boolean),
};