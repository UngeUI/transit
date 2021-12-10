import { terser } from "rollup-plugin-terser";

export default {
    input: "./lib/index.js",
    output: [{
        file: 'dist/transit.umd.js',
        format: "umd",
        name: 'transit'
    }, {
        file: 'dist/transit.esm.js',
        format: "esm",
        name: 'transit'
    }],
    plugins: [
        terser({ compress: { drop_console: true } })
    ]
}