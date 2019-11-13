const path = require('path');

module.exports = function importer(originalUrl) {
  let url = originalUrl;

  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return { file: url };
};
