import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {visualizer} from "rollup-plugin-visualizer";

export default defineConfig({
  base: '/vitpnpm/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    visualizer({ open: true }) // Открыть анализ в браузере

  ],
  build: {
    rollupOptions: {
      output: {
        // Разбиваем крупные библиотеки на отдельные чанки
        manualChunks: {
          react: ['react', 'react-dom'], // Вынос React в отдельный чанк
          vendor: [
            'styled-components',
            'react-awesome-reveal',
            // Укажите крупные библиотеки
          ],
        },
      },
    },
  },
});
