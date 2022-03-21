import React from 'react';
import { DropdownContainer } from '@components/base';
import { icoRefresh } from '@assets';
import * as S from './Style';
import { useAppDispatch, useAppSelector } from '@redux/store';
import {
  changeMaterial,
  changeMethod,
  reset,
  selectOption,
} from '@redux/optionSlice';

export type FilterType = 'method' | 'material';

const Dropdowns = () => {
  const { method, material } = useAppSelector(selectOption);
  const appDispatch = useAppDispatch();
  const filterMethod = (target: string) => appDispatch(changeMethod(target));

  const filterMaterial = (target: string) =>
    appDispatch(changeMaterial(target));

  const onReset = () => {
    appDispatch(reset());
  };

  const flagRest =
    method.some(({ checked }) => checked) ||
    material.some(({ checked }) => checked);

  return (
    <S.DropdownsWrapper>
      <DropdownContainer
        label={'가공방식'}
        items={method}
        changeItem={filterMethod}
      />
      <DropdownContainer
        label={'재료'}
        items={material}
        changeItem={filterMaterial}
      />
      {flagRest && (
        <S.ResetButton onClick={onReset}>
          <img src={icoRefresh} alt="필터링 리셋" />
          <span>필터링 리셋</span>
        </S.ResetButton>
      )}
    </S.DropdownsWrapper>
  );
};

export default Dropdowns;
