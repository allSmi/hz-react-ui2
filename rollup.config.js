import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import {terser} from "rollup-plugin-terser";
// import ts from '@rollup/plugin-typescript'
import ts from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import img from 'rollup-plugin-img'
// import dts from "rollup-plugin-dts";

const path = require('path')

const input = './main.ts'
const plugins = [
  nodeResolve(),
  commonjs(),
  ts(),
  postcss({
    extract: true, // 把css提取为单独文件
    // extract: "css/[name].css", // 把css提取为单独文件
  }),
  img(),
  babel({
    // babelrc: false,
    babelHelpers : 'runtime',
    // include: [
    //   'src/**'
    // ],
    exclude: 'node_modules/**',
    extensions:["tsx","ts","js","jsx"],
  }),
]

export default [
{
  input,
  output: {
    dir: './dist/rollup-es-modules',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
    // 没生效？？？
    // assetFileNames: ({ name }) => {
    //   console.log(name);
    //   const { ext, dir, base } = path.parse(name);
    //   if (ext !== '.css') return '[name].[ext]';
    //   // 规范 style 的输出格式
    //   return path.join(dir, 'style', base);
    // }
  },
  plugins,
  external: [
    /@babel\/runtime/,
    'react',
    'react-dom',
  ]
},
{
  input,
  output: {
    file: './dist/rollup-es/bundle.js',
    format: 'es',
  },
  plugins,
  external: [
    /@babel\/runtime/,
    'react',
    'react-dom',
  ]
},
{
  input,
  output: {
    file: './dist/rollup-umd/bundle.js',
    name: 'hzReactUi',
    format: 'umd',
    // 配置external对应的全局变量
    // Use output.globals to specify browser global variable names corresponding to external modules
    // react (guessing 'React')
    // react-dom (guessing 'ReactDOM')
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    ...plugins,
    // terser()
  ],
  external: [
    'react',
    'react-dom',
  ]
},
]


// {
//   input: "./main.d.ts",
//   output: [{ file: "dist/my-library.d.ts", format: "es" }],
//   plugins: [
//     ...plugins,
//     dts()
//   ],
//   external: [
//     /@babel\/runtime/,
//     'react',
//     'react-dom',
//   ]
// }
