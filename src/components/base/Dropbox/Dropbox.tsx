import React from 'react';
import { DropdownProps } from '../Dropdown/Dropdown';
import * as S from './Style';

const Dropbox = ({
  filterType,
  dataList,
  setMethodList,
  setMaterialList,
}: DropdownProps) => {
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (filterType === 'method' && setMethodList) {
      setMethodList((prev) => ({
        ...prev,
        [value]: !prev[value],
      }));
    }
    if (filterType === 'material' && setMaterialList) {
      setMaterialList((prev) => ({
        ...prev,
        [value]: !prev[value],
      }));
    }
  };

  return (
    <S.Dropbox onClick={(e) => e.stopPropagation()}>
      {React.Children.toArray(
        Object.entries(dataList).map(([type, checked]) => {
          const isChecked = checked as boolean;
          return (
            <S.DropboxSet>
              <input
                onChange={onInputChange}
                type="checkbox"
                checked={isChecked}
                id={type}
                name={filterType}
                value={type}
              />
              <label htmlFor={type}>{type}</label>
            </S.DropboxSet>
          );
        })
      )}
    </S.Dropbox>
  );
};

export default Dropbox;
