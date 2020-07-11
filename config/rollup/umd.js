import replace from '@rollup/plugin-replace';

import { defaultPlugins, postcssPlugin } from './common';

export default {
  input: './src/index.js',
  output: [
    {
      dir: './umd',
      format: 'umd',
      sourcemap: 'inline',
      name: 'networkViewer',
    },
  ],
  plugins: [
    ...defaultPlugins,
    postcssPlugin(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
