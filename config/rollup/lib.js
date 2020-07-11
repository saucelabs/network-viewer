import smartAsset from 'rollup-plugin-smart-asset';

import common, { defaultPlugins, postcssPlugin } from './common';
import pkg from './../../package.json';

export default {
  ...common,
  output: [{
    sourcemap: true,
    file: pkg.main,
    format: 'cjs',
  }],
  plugins: [
    ...defaultPlugins,
    postcssPlugin({
      inject: true,
      extract: false,
    }),
    smartAsset({
      url: 'copy',
      useHash: true,
      keepName: true,
      keepImport: true,
    }),
  ],
};
