import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vitpnpm/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
});