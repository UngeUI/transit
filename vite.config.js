import { defineConfig } from 'vite'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
    build: {
        rollupOptions: {
            input: './lib/index.js',
            output: {
                file: 'dist/transit.umd.js',
                format: 'umd'
            },
            plugins: [
                terser({
                    compress: {
                        drop_console: true
                    }
                })
            ]
        }
    }
})