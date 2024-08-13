import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import autoprefixer from 'autoprefixer';
import svgr from '@svgr/rollup';
import cssnano from 'cssnano';
import filesize from 'rollup-plugin-filesize';

import pkg from './../../package.json' assert { type: 'json' };

export const EXTENSIONS = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.es6',
  '.es',
  '.mjs',
  '.jpg',
  '.png',
  '.svg',
];

const externaldep = []
  .concat(pkg.peerDependencies || {})
  .concat(Object.keys(pkg.dependencies || {}));
const externalPredicate = new RegExp(`^(${externaldep.join('|')})($|/)`);
const externalTest = externaldep.length === 0 ? () => false : (id) => externalPredicate.test(id);

export const postcssPlugin = (options = {}) => (
  postcss({
    plugins: [
      autoprefixer(),
      cssnano({
        preset: 'default',
      }),
    ].filter(Boolean),
    autoModules: false,
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    ...options,
  })
);

export const defaultPlugins = [
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main'],
    browser: true,
    extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
  }),
  commonjs({
    include: /\/node_modules\//,
  }),
  json(),
  svgr(),
  babel({
    extensions: EXTENSIONS,
    exclude: '/node_modules/**',
    babelHelpers: 'bundled',
    passPerPreset: true,
  }),
  external(),
  filesize(),
];

export default {
  input: './src/index.js',
  external: (id) => {
    if (id === 'babel-plugin-transform-async-to-promises/helpers') {
      return false;
    }
    return externalTest(id);
  },
  treeshake: {
    propertyReadSideEffects: false,
  },
};
