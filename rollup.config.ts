import tsPlugin from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default [
    // browser-friendly UMD build
    {
        input: "src/index.ts",
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: false,
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: false,
            },
            {
                name: pkg.name,
                file: pkg.browser,
                format: "umd",
                sourcemap: false,
            },
        ],
        plugins: [
            tsPlugin(),
            resolve(), //
            commonjs(),
        ],
    },
];