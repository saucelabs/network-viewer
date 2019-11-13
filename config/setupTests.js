import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import requireHacker from 'require-hacker';

configure({ adapter: new Adapter() });

const noop = () => null;
const reactNoop = `
  function reactNoop() {
    return null;
  }
`;
const extensions = [
  'scss', 'css', 'ico', 'png', 'svg', 'xml',
];

extensions.forEach((ext) => {
  require.extensions[`.${ext}`] = noop;
  return require.extensions[`.${ext}`];
});
requireHacker.hook('svg', () => `module.exports = ${reactNoop}`);

requireHacker.hook('scss', () => 'module.exports = { analyticsBlue: \'#333\' }');

requireHacker.global_hook('style-loader', (path) => (
  path.includes('!style-loader') ? { source: '', path } : undefined
));
