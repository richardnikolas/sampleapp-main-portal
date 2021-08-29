const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'sampleApp',
    projectName: 'main-portal-app',
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    output: {
      ...defaultConfig.output,
      chunkFilename: '[name].[contenthash].chunk.js',
    },
    externals: [
      'react-router-dom',
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  })
}
