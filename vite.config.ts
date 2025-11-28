import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // ⚠️ TRÈS IMPORTANT : C'est le nom de ton repository GitHub
  // Si ton repo s'appelle "portfolio", laisse "/portfolio/"
  // Si ton repo s'appelle "mon-site", mets "/mon-site/"
  base: '/portfolio/', 

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});