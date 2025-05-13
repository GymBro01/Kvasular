import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const angular = await import('@analogjs/vite-plugin-angular');
  
  return {
    plugins: [angular.default()],
    server: {
      port: 5173
    }
  };
});