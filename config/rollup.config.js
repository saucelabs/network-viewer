import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import autoprefixer from 'autoprefixer';
import smartAsset from 'rollup-plugin-smart-asset';
import svgr from '@svgr/rollup';
import cssnano from 'cssnano';

import pkg from './../package.json';

const EXTENSIONS = [
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

export default {
  input: './src/index.js',
  output: [{
    sourcemap: true,
    file: pkg.main,
    format: 'cjs',
  },
  ],
  external: (id) => {
    if (id === 'babel-plugin-transform-async-to-promises/helpers') {
      return false;
    }
    return externalTest(id);
  },
  treeshake: {
    propertyReadSideEffects: false,
  },
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
        cssnano({
          preset: 'default',
        }),
      ].filter(Boolean),
      autoModules: true,
      modules: { generateScopedName: '[name]__[local]__[hash:base64:5]' },
      inject: false,
      extract: true,
    }),
    nodeResolve({
      mainFields: ['module', 'jsnext', 'main'],
      browser: true,
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
    }),
    commonjs({
      include: /\/node_modules\//,
    }),
    json(),
    smartAsset({
      url: 'copy',
      useHash: true,
      keepName: true,
      keepImport: true,
    }),
    svgr(),
    babel({
      extensions: EXTENSIONS,
      exclude: '/node_modules/**',
      babelHelpers: 'bundled',
      passPerPreset: true,
    }),
    external(),
  ],
};
