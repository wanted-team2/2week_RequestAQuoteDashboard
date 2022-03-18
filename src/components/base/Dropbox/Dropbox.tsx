import React from 'react';
import * as S from './Style';
import { ListItem } from '@pages/Home/Home';

interface DropboxProps {
  items: ListItem[];
  changeItem: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const Dropbox = ({ items, changeItem }: DropboxProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    changeItem((prevState) =>
      prevState.map((state) =>
        state.name === targetValue
          ? { ...state, checked: !state.checked }
          : state
      )
    );
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
