import { ReactElement } from 'react';
import { Buttons } from '@components/base';
import * as S from './Style';
import { ICardData } from '@models/CardData';

export interface RequestsType {
  id: number;
  title: string;
  client: string;
  due: string | Date;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface CardProps {
  requests: ICardData;
  width: number;
  height: number;
}

export const Card = ({ requests, width, height }: CardProps): ReactElement => {
  return (
    <S.CardWrapper key={requests?.id} width={width} height={height}>
      <S.TitleBox>
        <div>{requests.title}</div>
        {requests.status === '상담중' && (
          <S.ConsultingButton>상담중</S.ConsultingButton>
        )}
      </S.TitleBox>
      <S.Client>{requests?.client}</S.Client>
      <S.Due>{requests.due}까지 납기</S.Due>
      <S.Hr />
      <S.CardContent>
        <S.Content1>도면개수</S.Content1>
        <S.Content2>{requests.count}개</S.Content2>
      </S.CardContent>
      <S.CardContent>
        <S.Content1>총 수량</S.Content1>
        <S.Content2>{requests.amount}개</S.Content2>
      </S.CardContent>
      <S.CardContent>
        <S.Content1>가공방식</S.Content1>
        <S.Content2>{requests.method?.join(',')}</S.Content2>
      </S.CardContent>
      <S.CardContent>
        <S.Content1>재료</S.Content1>
        <S.Content2>{requests.material?.join(',')}</S.Content2>
      </S.CardContent>
      <S.ButtonWrapper>
        <Buttons />
      </S.ButtonWrapper>
    </S.CardWrapper>
  );
};

export default Card;
