/* eslint-disable @typescript-eslint/no-var-requires */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const paths = require('react-scripts/config/paths');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// 合并项目，修改打包输出的路径
paths.appBuild = path.join(path.dirname(paths.appBuild), '../static/appbuilder/vison');

function webpack(config){
  config.devtool = false;
  // alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@src': path.resolve(__dirname, 'src'),
  };

  // plugin
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ['json'],
    }),
  );

  // if (process.env.NODE_ENV !== 'production') {
  //   config.plugins.push(
  //     new BundleAnalyzerPlugin()
  //   )
  // }

  return config;
}
module.exports = {
  webpack: config => {
    config.devtool = false;
    // alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
    };

    // plugin
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ['json'],
      }),
    );

    // if (process.env.NODE_ENV !== 'production') {
    //   config.plugins.push(
    //     new BundleAnalyzerPlugin()
    //   )
    // }

    return config;
  },
};
