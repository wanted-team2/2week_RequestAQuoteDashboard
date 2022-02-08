import { flexbox } from '@styles/commonStyles';
import styled from 'styled-components';

export const DropdownsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  & > form:first-of-type {
    margin-right: ${({ theme }) => `${theme.gap.base * 2}px`};
  }
`;

export const ResetButton = styled.button`
  ${flexbox({ flex: 'inline-flex' })};
  height: ${({ theme }) => `${theme.size.buttonHeight}px`};
  margin-left: ${({ theme }) => `${theme.gap.base * 6}px`};
  color: ${({ theme }) => theme.colors.skyBlue};

  & > img {
    width: 16px;
    height: 16px;
    margin-right: ${({ theme }) => `${theme.gap.base * 3}px`};
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: ${({ theme }) => `${theme.gap.base * 3}px`};
  }
`;
