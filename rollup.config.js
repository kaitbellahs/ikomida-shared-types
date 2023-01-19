import autoExternal from 'rollup-plugin-auto-external';
import tsPlugin from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import { createRequire } from 'module'
import beep from '@rollup/plugin-beep'
import strip from '@rollup/plugin-strip'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')
const tsconfig = require('./tsconfig.json')
import ast from "abstract-syntax-tree"
const { parse, generate, remove } = ast;
const fs = require('fs');

function iKomidaPlugin() {
    return {
        name: "iKomida-plugin",
        renderChunk(code, chunk, options, meta) {
            if (chunk.type === 'chunk') {
                const isUMD = ['umd', 'iife'].includes(options.format)
                const classesArray = []
                const tree = parse(code)
                const array = (isUMD ? tree.body[0].expression.arguments[1].body.body : tree.body)
                const iterable = [...array]
                for (let i = 0, j = 0; i < iterable.length; i++, j++) {
                    const object = iterable[i]
                    if (object?.type === 'ClassDeclaration') {
                        classesArray.push(object)
                        array.splice(j, 1)
                        j--
                    }
                }
                if (isUMD) {
                    tree.body[0].expression.arguments[1].body.body = [...classesArray, ...array]
                } else {
                    remove(tree, 'Literal[value="use strict"]')
                    tree.body = [...classesArray, ...array]
                }
                const result = isUMD ? generate(tree) : `"use strict"
${generate(tree)}`
                // fs.writeFile(`./debug/${chunk.fileName}`, result, err => {
                //     if (err) {
                //         console.error(err);
                //     }
                //     // file written successfully
                // });
                return result
            }
            return code
        }
    }
}

export default [
    {
        input: "src/main.ts",
        output: [
            {
                inlineDynamicImports: true,
                file: pkg.exports.node.require,
                format: 'cjs',
                sourcemap: false,
            },
            {
                inlineDynamicImports: true,
                file: pkg.exports.node.import,
                format: 'es',
                sourcemap: false,
            },
            {
                inlineDynamicImports: true,
                name: pkg.name,
                file: pkg.exports.default,
                format: "umd",
                sourcemap: false,
            },
        ],
        plugins: [
            strip(),
            beep(),
            autoExternal(),
            resolve({
                preferBuiltins: true
            }),
            json(),
            tsPlugin(tsconfig),
            iKomidaPlugin(),
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