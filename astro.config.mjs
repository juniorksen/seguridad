import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    output: 'server', // Cambiar a 'server' o 'hybrid' para habilitar las rutas de API
    server: {
        port: 4321,
    },
    adapter: vercel(),
});