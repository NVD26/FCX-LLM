module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Add support for optional chaining via Babel
        webpackConfig.module.rules.push({
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-optional-chaining']
            }
          }
        });
  
        return webpackConfig;
      },
    },
  };
  