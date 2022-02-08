import React, { useEffect, useState } from 'react';
import { Dropdown } from '@components/base';
import { icoRefresh } from '@assets';
import { getTrutyObjectLength, setAllValueToFalse } from '@utils/functions';
import * as S from './Style';

const datas = {
  method: ['선반', '밀링'],
  material: ['알루미늄', '탄소강', '구리', '합금강', '강철'],
};

export type FilterType = 'method' | 'material';

export type objectTypes = {
  [key: string]: boolean;
};

const Dropdowns = () => {
  const [methodList, setMethodList] = useState<objectTypes>({
    선반: false,
    밀링: false,
  });
  const [materialList, setMaterialList] = useState<objectTypes>({
    알루미늄: false,
    탄소강: false,
    구리: false,
    합금강: false,
    강철: false,
  });
  const [hasList, setHasList] = useState(false);

  const onReset = () => {
    setMethodList({ ...setAllValueToFalse(methodList) });
    setMaterialList({ ...setAllValueToFalse(materialList) });
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
        Object.keys(datas).map((type) => {
          const filteredType = type as FilterType;

          return (
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
          );
        })
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
