import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {
  eslint,
} from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import {
  terser,
} from 'rollup-plugin-terser';

const pJson = require('./package.json');

const {
  version,
  license,
} = pJson;
const banner = '/*!\n'
    + ` * ${pJson.name} v${version}\n`
    + ` * (c) 2018-${new Date().getFullYear()}\n`
    + ` * Released under the ${license} License.\n`
    + ' */';
const ENV = process.env.NODE_ENV.trim();
const paths = {
  input: {
    root: 'src/index.js',
  },
  output: {
    root: 'dist/',
  },
};
const fileNames = {
  development: 'index.common.js',
  production: 'index.common.js',
  production6: 'index.esm.js',
};
const fileName = fileNames[ENV];
export default {
  input: `${paths.input.root}`,
  output: {
    file: `${paths.output.root}${fileName}`,
    format: ENV === 'production6' ? 'es' : 'umd',
    name: 'index',
    banner,
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      include: ['src/**'],
      exclude: ['node_modules/**'],
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    replace({
      exclude: 'node_modules/**',
      ENVIRONMENT: JSON.stringify(process.env.NODE_ENV),
    }),
    ENV && ENV.includes('production') && terser({
      output: {
        comments: /^!/,
      },
    }),
  ],
};
