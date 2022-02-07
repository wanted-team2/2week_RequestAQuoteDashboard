const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
// @NOTE: react-scripts 5에서 아직 craco를 정식지원하지 않으므로 다른 방법 사용

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
    '@types': path.resolve(__dirname, 'src/types'),
    '@stores': path.resolve(__dirname, 'src/stores'),
  })
);
