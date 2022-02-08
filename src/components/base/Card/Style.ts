import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';
import { font12, font14, font16 } from '@styles/fonts';

export interface Wrapper {
  width: number | string;
  height: number | string;
}

export const CardWrapper = styled.div<Wrapper>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: ${({ theme }) => `${theme.gap.base * 6}px`}
    ${({ theme }) => `${theme.gap.base * 4}px`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => `${theme.size.borderRadius}px`};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.skyBlue};
  }
  margin-bottom: 8px;
`;

export const TitleBox = styled.div`
  ${flexbox({ jc: 'between' })};
  ${font16(700)};
`;

export const ConsultingButton = styled.button`
  color: ${({ theme }) => theme.colors.warning};
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.warning};
  border-radius: ${({ theme }) => `${theme.size.borderRadius * 3}px`};
  ${font12(500)}
`;

export const Client = styled.div`
  margin-top: ${({ theme }) => `${theme.gap.base}px`};
  margin-bottom: ${({ theme }) => `${theme.gap.base * 6}px`};
  ${font14(500)}
`;

export const Due = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  ${font14(400)}
`;

export const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: ${({ theme }) => `${theme.gap.base * 4}px`};
  margin-bottom: ${({ theme }) => `${theme.gap.base * 8}px`};
`;

export const CardContent = styled.div`
  margin-bottom: ${({ theme }) => `${theme.gap.base * 2}px`};
`;
export const Content1 = styled.div`
  max-width: 70px;
  min-width: 70px;
  height: 20px;
  margin-right: ${({ theme }) => `${theme.gap.base * 4}px`};
  ${font14(400)}
  display: inline-block;
`;
export const Content2 = styled.span`
  width: 70px;
  height: 20px;
  ${font14(700)}
`;

export const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => `${theme.gap.base * 6}px`};
`;
