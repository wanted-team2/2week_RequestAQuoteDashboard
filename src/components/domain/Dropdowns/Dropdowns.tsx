import React from 'react';
import { ListItem } from '@pages/Home/Home';
import { DropdownContainer } from '@components/base';
import { icoRefresh } from '@assets';
import { setAllValueToFalse } from '@utils/functions';
import * as S from './Style';

interface DropdownsProps {
  methodList: ListItem[];
  materialList: ListItem[];
  setMethodList: React.Dispatch<React.SetStateAction<ListItem[]>>;
  setMaterialList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

export type FilterType = 'method' | 'material';

const Dropdowns = ({
  methodList,
  materialList,
  setMethodList,
  setMaterialList,
}: DropdownsProps) => {
  const onReset = () => {
    setMethodList(setAllValueToFalse);
    setMaterialList(setAllValueToFalse);
  };

  return (
    <S.DropdownsWrapper>
      <DropdownContainer
        label={'가공방식'}
        items={methodList}
        changeItem={setMethodList}
      />
      <DropdownContainer
        label={'재료'}
        items={materialList}
        changeItem={setMaterialList}
      />
      <S.ResetButton onClick={onReset}>
        <img src={icoRefresh} alt="필터링 리셋" />
        <span>필터링 리셋</span>
      </S.ResetButton>
    </S.DropdownsWrapper>
  );
};

export default Dropdowns;
