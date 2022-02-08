import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';
import { font16, font20 } from '@styles/fonts';

export const HomeWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 110px 155px;

  @media ${({ theme }) => theme.device.mobile} {
    min-width: 360px;
    padding: 68px 20px 20px;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.colors.darkGray};
  h1 {
    ${font20(600)};
  }
  div {
    ${font16(400)};
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.gap.base * 8}px;
  }
`;

export const FilterTab = styled.div`
  ${flexbox({ jc: 'between' })};
  margin: 32px 0;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: ${({ theme }) => theme.gap.base * 5}px;
  }
`;

export const CardsContainer = styled.div`
  ${flexbox({ jc: 'start', ai: 'center' })};
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;
