import { override, addWebpackAlias } from 'customize-cra';
import { resolve } from 'path';

export default override(
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '@apis': resolve(__dirname, 'src/apis'),
    '@assets': resolve(__dirname, 'src/assets'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@components': resolve(__dirname, 'src/components'),
    '@hooks': resolve(__dirname, 'src/hooks'),
    '@styles': resolve(__dirname, 'src/styles'),
    '@utils': resolve(__dirname, 'src/utils'),
    '@models': resolve(__dirname, 'src/models'),
  })
);
