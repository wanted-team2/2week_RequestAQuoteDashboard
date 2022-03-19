import React, { useRef } from 'react';
import { ReactComponent as ArrowDropdown } from '@assets/arrowdown.svg';
import { useToggle, useClickAway } from '@hooks';
import * as S from './Style';
import Dropbox from '../Dropbox/Dropbox';
import { ListItem } from '@redux/optionSlice';

export interface DropdownListProps {
  items: ListItem[];
  changeItem: (value: string) => void;
  label: string;
}

const DropdownContainer = ({
  items = [],
  label = '',
  changeItem,
}: DropdownListProps) => {
  const DropdownsRef = useRef(null);
  const { isToggle, setState, onToggle } = useToggle({ initialState: false });
  const checkedItemCount = items.filter(({ checked }) => checked).length;
  useClickAway(DropdownsRef, () => setState(false));

  return (
    <S.Form
      onClick={onToggle}
      isChecked={!!checkedItemCount}
      ref={DropdownsRef}>
      <span>
        {label}
        {!!checkedItemCount && `(${checkedItemCount})`}
      </span>
      {isToggle && <Dropbox items={items} changeItem={changeItem} />}
      <ArrowDropdown />
    </S.Form>
  );
};

export default React.memo(DropdownContainer);
