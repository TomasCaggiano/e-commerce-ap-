import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/e-commerce-ap-/',
  plugins: [react()],
});