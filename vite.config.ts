import path from "path";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html",
      open: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 메인 프레임워크 청크
          "react-vendor": [
            "react",
            "react-dom",
            "react-router-dom",
            "react-helmet-async",
          ],

          // 상태 관리 및 데이터 페칭 청크
          "query-vendor": ["@tanstack/react-query"],

          // 스타일 및 UI 라이브러리 청크
          "ui-vendor": ["framer-motion", "lucide-react"],

          // 포켓몬 컴포넌트 청크
          "pokemon-components": [
            "./src/components/detail/default-info.jsx",
            "./src/components/detail/pokemon-main-image.jsx",
            "./src/components/detail/pokemon-image-gallery.jsx",
          ],
        },
      },
    },
  },
});
