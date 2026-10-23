import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, process.cwd());
  return {
    base: ENV.VITE_APP_PATH_URL,
    server: {
      port: Number(ENV.VITE_APP_PORT),
      host: true,
      open: true,
      proxy: {
        [ENV.VITE_APP_BASE_API_PROXY_NAME]: {
          target: ENV.VITE_APP_BASE_API_URL,
          changeOrigin: true,
          ws: true,
          rewrite: path => path.replace(new RegExp(`^${ENV.VITE_APP_BASE_API_PROXY_NAME}`), "")
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    plugins: [vue()],
    build: {
      sourcemap: false, // 生成 sourcemap 文件
      rollupOptions: {
        maxParallelFileOps: 5, // 同时读取文件数量
        output: {
          // 配置这个是让不同类型文件放在不同文件夹，不会显得太乱
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            // 静态资源分拆打包
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      },
      target: "esnext",
      outDir: "dist", // 指定输出路径
      assetsDir: "assets", // 指定生成静态文件目录
      assetsInlineLimit: 0, // 4096 小于此阈值的导入或引用资源将内联为 base64 编码
      chunkSizeWarningLimit: 500, // chunk 大小警告的限制
      emptyOutDir: true // 打包前先清空原有打包文件
    }
  };
});
