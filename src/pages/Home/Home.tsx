import * as S from './Style';
import React, { useState } from 'react';
import { Card, NotiBox, Header, Toggle } from '@components/base';
import { Dropdowns } from '@components/domain';
import { ICardData } from '@models/CardData';
import { filterCard } from '@utils/functions';
import { gql, useQuery } from '@apollo/client';
import useInitOptions from '@pages/Home/useInitOptions';

export interface CardListQuery {
  cardList: ICardData[];
}

const CARD_LIST = gql`
  query Test {
    cardList: allRequests {
      id
      title
      client
      due
      count
      amount
      method
      material
      status
    }
  }
`;
const Home = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { data, error, loading } = useQuery<CardListQuery>(CARD_LIST);
  const { methodList, materialList } = useInitOptions(data);

  if (error) {
    return <>에러 발생!</>;
  }

  const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isToggle = e.target.checked;
    setIsToggle(isToggle);
  };

  const filteredCard =
    data && filterCard(data.cardList, methodList, materialList, isToggle);

  const WaitBox = loading && <NotiBox text={'견적을 불러오는 중입니다.'} />;
  const EmptyBox = !filteredCard?.length && (
    <NotiBox text={'조건에 맞는 견적 요청이 없습니다.'} />
  );

  return (
    <S.HomeWrapper>
      <Header />
      <S.TitleWrapper>
        <S.Title>
          <h1>들어온 요청</h1>
          <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
        </S.Title>
        <S.FilterWrapper>
          <S.FilterTab>
            <Dropdowns />
          </S.FilterTab>
          <Toggle onChange={onToggle} children={'상담 중인 요청만 보기'} />
        </S.FilterWrapper>
      </S.TitleWrapper>
      {filteredCard && (
        <S.CardsContainer>
          {filteredCard.map((cardInfo) => (
            <Card
              key={cardInfo.id}
              width={366}
              height={356}
              requests={cardInfo}
            />
          ))}
        </S.CardsContainer>
      )}
      {WaitBox || EmptyBox}
    </S.HomeWrapper>
  );
};

export default Home;
