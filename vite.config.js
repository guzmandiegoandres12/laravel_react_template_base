import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
    plugins: [
        laravel.default({
            input: ['resources/css/app.scss', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react({ include: '**/*.tsx'}),
        tsconfigPaths()
    ],
});
