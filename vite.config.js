import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
    plugins: [
        vue(), 
        laravel([
            'resources/sass/app.scss', 
            'resources/js/app.js'
        ]), 
        eslintPlugin()],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
});
