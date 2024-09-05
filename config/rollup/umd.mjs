import replace from '@rollup/plugin-replace';

import common, { defaultPlugins, postcssPlugin } from './common.mjs';

export default {
  input: common.input,
  output: [{
    dir: './umd',
    format: 'umd',
    sourcemap: 'inline',
    name: 'networkViewer',
  }],
  plugins: [
    ...defaultPlugins,
    postcssPlugin(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
