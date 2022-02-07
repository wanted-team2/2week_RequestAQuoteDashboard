import React, { ReactElement } from 'react';
import * as S from './Style';

interface Props {
  children: string;
  blue: boolean;
}

const Button = ({ children, blue }: Props): ReactElement => {
  return (
    <>
      <S.Button blue={blue}>{children}</S.Button>
    </>
  );
};

export default Button;
