//根据环境变量中的target属性 获取对应模块中的 package.json
import path from 'path';
import json from '@rollup/plugin-json';
import resolvePlugin from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';

const packagesDir = path.resolve(__dirname, 'packages');
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const resolve = (p) => path.resolve(packageDir, p);
const name = path.basename(packageDir)
const pkg = require(resolve('package.json'));
const options = pkg.buildOptions;
//console.log(pkg)
const outputConfig = {
    'esm-bundler': {
        file: resolve(`dist/${name}.esm-bundler.js`),
        format: 'es'
    },
    'cjs': {
        file: resolve(`dist/${name}.cjs.js`),
        format: 'cjs'
    },
    'global': {
        file: resolve(`dist/${name}.global.js`),
        format: 'iife'
    }
}

function createConfig(format, output) {
    if (!output) {
        console.log(require('chalk').yellow(`invalid format: "${format}"`))
        process.exit(1)
    }
    output.exports = 'auto'
    const isGlobalBuild = /global/.test(format)
    if (isGlobalBuild) {
        output.name = options.name
    }
    output.sourcemap = true
    return {
        input: resolve('src/index.ts'),
        plugins: [
            json(),
            ts({
                tsconfig: path.resolve(__dirname, 'tsconfig.json'),
            }),
            resolvePlugin()
        ],
        output,
        onwarn: (msg, warn) => {
            if (!/Circular/.test(msg)) {
              warn(msg)
            }
          },
          treeshake: {
            moduleSideEffects: false
          }
    }
}

export default options.formats.map((format) => {
    return createConfig(format, outputConfig[format])
})