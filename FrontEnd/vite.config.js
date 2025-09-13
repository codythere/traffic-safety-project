import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 需要鎖定在限制的 port號 : http://localhost:3000/3001/8000/8888
    port: 3000,
  },
  plugins: [react()],
  optimizeDeps: {},
});
