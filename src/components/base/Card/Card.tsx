import React, { ReactElement } from "react";
import * as S from "./Style";
import * as I from "./Interfaces";

function Card({ requests, width, height }: I.CardProps): ReactElement {
  return (
    <S.CardWrapper key={requests?.id} width={width} height={height}>
      <S.TitleBox>
        <div>{requests.title}</div>
        {requests?.status === "상담중" && (
          <S.ConsultingButton>상담중</S.ConsultingButton>
        )}
      </S.TitleBox>
      <S.Client>{requests?.client}</S.Client>
      <S.Due>{requests?.due}까지 납기</S.Due>
      <S.Hr />
      <S.CardContent>
        <S.Content1>도면개수</S.Content1>
        <S.Content2>{requests?.count}개</S.Content2>
      </S.CardContent>
      <S.CardContent>
        <S.Content1>총 수량</S.Content1>
        <S.Content2>{requests?.amount}개</S.Content2>
      </S.CardContent>
      <S.CardContent>
        <S.Content1>가공방식</S.Content1>
        <S.Content2>
          {requests?.method?.map(
            (text, i) => text + (i + 1 !== requests?.method?.length ? "," : "")
          )}
        </S.Content2>
      </S.CardContent>
      <S.CardContent>
        <S.Content1>재료</S.Content1>
        <S.Content2>
          {requests?.material?.map(
            (text, i) =>
              text + (i + 1 !== requests?.material?.length ? "," : "")
          )}
        </S.Content2>
      </S.CardContent>
      <S.ButtonWrapper>{/* <button></button> */}</S.ButtonWrapper>
    </S.CardWrapper>
  );
}

export default Card;
