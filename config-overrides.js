/* eslint-disable no-param-reassign */
module.exports = {
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);

    if (!process.env.HTTPS) {
      
      config.disableHostCheck = true;
    }
    return config;
  };
},
};