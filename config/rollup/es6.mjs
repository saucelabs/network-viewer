import common, { defaultPlugins, postcssPlugin } from './common.mjs';

export default {
  ...common,
  output: [{
    dir: './es6',
    format: 'es',
    sourcemap: true,
    preserveModules: true,
  }],
  plugins: [
    ...defaultPlugins,
    postcssPlugin({
      inject: false,
      extract: true,
    }),
  ],
};
