import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
// import ts from '@rollup/plugin-typescript'
import ts from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import img from 'rollup-plugin-img'

// export default [{}]

module.exports = {
  input: './src/main.js',
  // output: {
  //   file: './dist/rollup-es/bundle.js',
  //   format: 'es',
  // },
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
  // watch: {
  //   exclude: 'node_modules/**',
  // },
  plugins: [
    nodeResolve(),
    commonjs(),
    ts(),
    postcss({
      extract: true, // 把css提取为单独文件
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
  ],
  external: [
    'react',
    'react-dom',
  ]
}
