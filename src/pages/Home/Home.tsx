import * as S from './Style';
import { Card, EmptyBox, Header, Toggle } from '@components/base';
import { Dropdowns } from '@components/domain';
import { ICardData } from '@models/CardData';
import useAxios from '@hooks/useAxios';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const data = useAxios<ICardData[]>('http://localhost:3001/requests');

  return (
    <S.HomeWrapper>
      <Header />
      <S.Title>
        <h1>들어온 요청</h1>
        <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
      </S.Title>
      <S.FilterTab>
        <Dropdowns />
        <Toggle children={'상담 중인 요청만 보기'} />
      </S.FilterTab>
      {data && (
        <S.CardsContainer>
          {data.map((cardInfo) => (
            <Card
              key={cardInfo.id}
              width={366}
              height={356}
              requests={cardInfo}
            />
          ))}
        </S.CardsContainer>
      )}
      {!data?.length && <EmptyBox />}
    </S.HomeWrapper>
  );
};

export default Home;
