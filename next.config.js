const NextFederationPlugin = require("@module-federation/nextjs-mf");
const deps = require("./package.json").dependencies;

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "rapidNext",
        remotes: {
          rapid: `rapid@http://localhost:3002/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        shared: {
          "react-redux": {
            singleton: true,
            requiredVersion: deps["react-redux"],
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
          },
          "react-bootstrap": {
            eager: false,
            singleton: true,
            requiredVersion: deps["react-bootstrap"],
          },
        },
      })
    );

    return config;
  },
};
