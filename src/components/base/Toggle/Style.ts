import styled from 'styled-components';
import { theme } from '@styles';
import { font14 } from '@styles/fonts';

export const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

export const ToggleInput = styled.input`
  display: none;
  &:checked + div {
    background-color: ${theme.colors.lightBlue};
  }
  &:checked + div::after {
    left: calc(100% - 15px);
    background-color: ${theme.colors.skyBlue};
    box-shadow: 1px 2px 2px 0 ${theme.colors.gray};
  }
  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;
    &::after {
      opacity: 0.7;
    }
  }
`;

export const ToggleSwitch = styled.div`
  display: inline-flex;
  align-items: center;
  width: 34px;
  height: 14px;
  padding: 2px;
  border: none;
  border-radius: 15px;
  background-color: #c2c2c2;
  box-sizing: border-box;
  transition: background-color 200ms ease-out;

  &::after {
    content: '';
    position: relative;
    left: -5px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f5f5f5;
    box-shadow: 1px 2px 2px 0 ${theme.colors.gray};
    transition: left 200ms ease-out;
  }
`;

export const Text = styled.span`
  ${font14(500)}
  vertical-align: text-top;
  margin-left: ${theme.gap.base * 4}px;
`;
