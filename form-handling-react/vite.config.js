import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Treat `.js` files as JSX
    include: /src\/.*\.js$/, // Process only `.js` files in the `src` directory
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite resolves `.js` and `.jsx`
  },
});
