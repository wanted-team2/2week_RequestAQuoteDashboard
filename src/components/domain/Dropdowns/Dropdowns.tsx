import React, { useEffect, useState } from 'react';
import { objectTypes } from '@pages/Home/Home';
import { Dropdown } from '@components/base';
import { icoRefresh } from '@assets';
import { getTrutyObjectLength, setAllValueToFalse } from '@utils/functions';
import * as S from './Style';

const datas = ['method', 'material'] as FilterType[];

interface DropdownsProps {
  methodList: objectTypes;
  materialList: objectTypes;
  setMethodList: React.Dispatch<React.SetStateAction<objectTypes>>;
  setMaterialList: React.Dispatch<React.SetStateAction<objectTypes>>;
}

export type FilterType = 'method' | 'material';

const Dropdowns = ({
  methodList,
  materialList,
  setMethodList,
  setMaterialList,
}: DropdownsProps) => {
  const [hasList, setHasList] = useState(false);

  const onReset = () => {
    setMethodList((prev) => ({ ...setAllValueToFalse(prev) }));
    setMaterialList((prev) => ({ ...setAllValueToFalse(prev) }));
  };

  useEffect(() => {
    if (methodList && materialList) {
      if (
        getTrutyObjectLength(methodList) === 0 &&
        getTrutyObjectLength(materialList) === 0
      ) {
        setHasList(false);
      } else setHasList(true);
    }
  }, [methodList, materialList]);

  return (
    <S.DropdownsWrapper>
      {React.Children.toArray(
        datas.map((filteredType) => (
          <Dropdown
            filterType={filteredType}
            dataList={filteredType === 'method' ? methodList : materialList}
            setMethodList={
              filteredType === 'method' ? setMethodList : undefined
            }
            setMaterialList={
              filteredType === 'material' ? setMaterialList : undefined
            }
          />
        ))
      )}
      {hasList && (
        <S.ResetButton onClick={onReset}>
          <img src={icoRefresh} alt="필터링 리셋" />
          <span>필터링 리셋</span>
        </S.ResetButton>
      )}
    </S.DropdownsWrapper>
  );
};

export default Dropdowns;
