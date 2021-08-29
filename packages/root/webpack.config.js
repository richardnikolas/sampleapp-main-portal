const path = require('path');
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'sampleApp'
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  })

  const merge = webpackMerge({
    customizeArray: webpackMerge.unique(
      'plugins',
      ['HtmlWebpackPlugin'],
      (plugin) => plugin.constructor && plugin.constructor.name
    ),
  })

  return merge(
    {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: 'src/index.ejs',
          favicon: 'src/assets/favicon.png',
          title: 'SampleApp - Micro Frontends',
          templateParameters: {
            orgName,
          },
        }),
      ],
    },
    defaultConfig,
    {
      plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src', 'config.js'),
              to: path.resolve(__dirname, 'dist')
            },
            {
              from: path.resolve(__dirname, 'src', 'importmap.json'),
              to: path.resolve(__dirname, 'dist')
            }
          ],
        })
      ]
    }
  )
}
