import styled from "styled-components";
import { FilterType } from "@components/domain/Dropdowns/Dropdowns";
import { font12, font14 } from "@styles/fonts";
import { flexbox } from "@styles/commonStyles";
import { check } from "prettier";

interface FormProps {
  checkedList: NodeListOf<Element> | never[];
}

export const Form = styled.form<FormProps>`
  ${flexbox({ flex: "inline-flex", jc: "center", ai: "center" })};

  position: relative;
  height: ${({ theme }) => `${theme.size.buttonHeight}px`};
  padding-left: ${({ theme }) => `${theme.gap.base * 3}px`};
  padding-right: 13.5px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  background-color: ${({ checkedList, theme }) =>
    checkedList.length > 0 ? theme.colors.blue : "white"};
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  ${font12(500)};
  color: inherit;

  span {
    padding-right: ${({ theme }) => `${theme.gap.base * 3}px`};
    color: ${({ checkedList }) =>
      checkedList.length > 0 ? "white" : "inherit"};
  }

  svg {
    fill: ${({ checkedList, theme }) =>
      checkedList.length > 0 ? "white" : theme.colors.gray};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;

export const Dropbox = styled.div`
  ${flexbox({ fd: "column", ai: "start" })};
  position: absolute;
  top: 32px;
  left: 0;
  min-width: 130px;
  padding: ${({ theme }) => `${theme.gap.base * 4}px ${theme.gap.base * 3}px`};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  background-color: white;
  ${font14(500)};
  gap: ${({ theme }) => `${theme.gap.base * 2}px`};
`;

export const DropboxSet = styled.div`
  ${flexbox({ jc: "start", ai: "center" })};
  gap: 10px;
`;
