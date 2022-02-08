import styled from 'styled-components';
import { theme } from '@styles';
import { font14 } from '@styles/fonts';
import { flexbox } from '@styles/commonStyles';

export const Container = styled.div`
  ${font14(400)};
  ${flexbox}
  color: ${theme.colors.gray};
  width: 100%;
  height: 100px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.size.borderRadius}px;
`;
