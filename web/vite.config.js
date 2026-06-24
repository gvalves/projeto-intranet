/** @type {import('vite').UserConfig} */
export default {
  server: {
    host: '0.0.0.0',
    port: 8946,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env.API_TARGET || 'http://127.0.0.1:10638',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 8946,
    strictPort: true,
  },
};
