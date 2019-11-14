const option = {
  search: /.styles.scss/,
  replace: '.styles.css',
};

module.exports = () => ({
  visitor: {
    StringLiteral(receivedPath) {
      const path = receivedPath;
      path.node.value = path.node.value.replace(option.search, option.replace);
    },
  },
});
