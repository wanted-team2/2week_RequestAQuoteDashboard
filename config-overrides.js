/* eslint-disable @typescript-eslint/no-var-requires */
//
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@apis': path.resolve(__dirname, 'src/apis'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@models': path.resolve(__dirname, 'src/models'),
    '@redux': path.resolve(__dirname, 'src/redux'),
  })
);
