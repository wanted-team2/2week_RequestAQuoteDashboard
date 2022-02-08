import styled from 'styled-components';
import { flexbox } from '@styles/commonStyles';
import { font16, font20 } from '@styles/fonts';

export const HomeWrapper = styled.div`
  padding: 155px 110px;
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

export const FilterTab = styled.div`
  ${flexbox({ jc: 'between' })};
  margin: 32px 0;
`;

export const CardsContainer = styled.div`
  ${flexbox({ jc: 'between', ai: 'between' })};
  flex-wrap: wrap;
`;
