module.exports = (env) => {
  return require(`./webpack/webpack.config.${env}.js`);
};
