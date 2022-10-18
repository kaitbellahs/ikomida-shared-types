const autoExternal = require('rollup-plugin-auto-external');
const tsPlugin = require('@rollup/plugin-typescript');
const resolve = require("@rollup/plugin-node-resolve");
const { terser } = require('rollup-plugin-terser');
const json = require('@rollup/plugin-json');
const pkg = require('./package.json')
const tsconfig = require('./tsconfig.json')

exports.default = [
    {
        input: "src/main.ts",
        output: [
            {
                inlineDynamicImports: true,
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                inlineDynamicImports: true,
                file: pkg.module,
                format: 'es',
                sourcemap: true,
            },
            {
                inlineDynamicImports: true,
                name: pkg.name,
                file: pkg.browser,
                format: "umd",
                sourcemap: true,
            },
        ],
        plugins: [
            autoExternal(),
            resolve({
                preferBuiltins: true
            }),
            json(),
            tsPlugin(tsconfig),
            terser({
                compress: {
                    ecma: 'ESNext',
                    dead_code: true,
                    drop_console: true,
                    drop_debugger: true,
                    keep_classnames: true,
                    properties: false,
                    reduce_funcs: false,
                    reduce_vars: false
                },
                ecma: 'ESNext',
                keep_classnames: true,
                mangle: false
            })
        ],
    },
];