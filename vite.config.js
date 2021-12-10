import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from "rollup-plugin-terser";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: './lib/index.js',
            formats: ['es', 'umd'],
            name: 'transit',
        },
        rollupOptions: {
            plugins: [
                terser({ compress: { drop_console: true } })
            ]
        }
    }
})