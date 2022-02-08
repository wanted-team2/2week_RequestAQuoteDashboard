import styled from 'styled-components';
import { font12 } from '@styles/fonts';
import { flexbox } from '@styles/commonStyles';

interface FormProps {
  checkedList: number;
}

export const Form = styled.form<FormProps>`
  ${flexbox({ flex: 'inline-flex', jc: 'center', ai: 'center' })};

  position: relative;
  height: ${({ theme }) => `${theme.size.buttonHeight}px`};
  padding-left: ${({ theme }) => `${theme.gap.base * 3}px`};
  padding-right: 13.5px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  background-color: ${({ checkedList, theme }) =>
    checkedList > 0 ? theme.colors.blue : 'white'};
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  ${font12(500)};
  color: inherit;

  span {
    padding-right: ${({ theme }) => `${theme.gap.base * 3}px`};
    color: ${({ checkedList }) => (checkedList > 0 ? 'white' : 'inherit')};
  }

  svg {
    fill: ${({ checkedList, theme }) =>
      checkedList > 0 ? 'white' : theme.colors.gray};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.skyBlue};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ checkedList }) => checkedList > 0 && 'padding: 0px 8px'};

    span {
      padding-right: ${({ theme }) => `${theme.gap.base * 2}px`};
    }
  }
`;
