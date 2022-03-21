import { ListItem } from '@redux/optionSlice';
import React from 'react';
import * as S from './Style';

interface DropboxProps {
  items: ListItem[];
  changeItem: (value: string) => void;
}

const Dropbox = ({ items, changeItem }: DropboxProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    changeItem(targetValue);
  };
  return (
    <S.Dropbox onClick={(e) => e.stopPropagation()}>
      {React.Children.toArray(
        items.map(({ name, checked }) => {
          const isChecked = checked as boolean;
          return (
            <S.DropboxSet>
              <input
                onChange={onInputChange}
                type="checkbox"
                checked={isChecked}
                id={name}
                value={name}
              />
              <label htmlFor={name}>{name}</label>
            </S.DropboxSet>
          );
        })
      )}
    </S.Dropbox>
  );
};

export default Dropbox;
