import React, { useEffect, useState } from "react";
import {
  FilterType,
  objectTypes,
} from "@components/domain/Dropdowns/Dropdowns";
import { ReactComponent as ArrowDropdown } from "@assets/arrowDropdown.svg";
import { getTrutyObjectLength } from "@utils/functions";
import { useToggle } from "@hooks";
import * as S from "./Style";

interface DropdownProps {
  dataList: objectTypes;
  filterType: FilterType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setMethodList?: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  setMaterialList?: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
}

const Dropdown = ({
  dataList = {},
  filterType,
  onChange,
  setMethodList,
  setMaterialList,
}: DropdownProps) => {
  const { isToggle, onToggle } = useToggle(false);
  const [checkedList, setCheckedList] = useState(0);

  const getFilterType = (filterType: FilterType) =>
    filterType === "method" ? "가공방식" : "재료";

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (filterType === "method" && setMethodList) {
      setMethodList((prev) => ({
        ...prev,
        [value]: !prev[value],
      }));
    }
    if (filterType === "material" && setMaterialList) {
      setMaterialList((prev) => ({
        ...prev,
        [value]: !prev[value],
      }));
    }
  };

  useEffect(() => {
    setCheckedList(getTrutyObjectLength(dataList));
  }, [dataList]);

  return (
    <S.Form onClick={onToggle} checkedList={checkedList}>
      <span>
        {getFilterType(filterType)}
        {checkedList > 0 && `(${checkedList})`}
      </span>
      <ArrowDropdown />
      {isToggle && (
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
      )}
    </S.Form>
  );
};

export default React.memo(Dropdown);
