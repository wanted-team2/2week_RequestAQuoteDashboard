import styled from 'styled-components';
import { font14 } from '@styles/fonts';

interface IBtn {
  blue: boolean;
}

export const Button = styled.button<IBtn>`
  ${font14(500)};
  color: ${({ blue }) => (blue ? '#fff' : ({ theme }) => theme.colors.skyBlue)};
  border: 1px solid ${({ theme }) => theme.colors.skyBlue};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  background: ${({ blue }) =>
    blue ? ({ theme }) => theme.colors.skyBlue : '#fff'};
  padding: ${({ theme }) => `6px ${theme.gap.base * 3}px`};
  margin-right: ${({ theme }) => `${theme.gap.base * 3}px`};
`;
