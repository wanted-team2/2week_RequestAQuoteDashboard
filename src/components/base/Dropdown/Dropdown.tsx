import React, { useState } from "react";
import {
  FilterType,
  NodeListType,
} from "@components/domain/Dropdowns/Dropdowns";
import { ReactComponent as ArrowDropdown } from "@assets/arrowDropdown.svg";
import { useToggle } from "@hooks";
import * as S from "./Style";

interface DropdownProps {
  dataList: string[];
  filterType: FilterType;
  setMethodList?: React.Dispatch<React.SetStateAction<NodeListType>>;
  setMaterialList?: React.Dispatch<React.SetStateAction<NodeListType>>;
}

const Dropdown = ({
  dataList,
  filterType,
  setMethodList,
  setMaterialList,
}: DropdownProps) => {
  const { isToggle, onToggle } = useToggle(false);
  const [checkedList, setCheckedList] = useState<NodeListOf<Element> | never[]>(
    []
  );

  const getFilterType = (filterType: FilterType) =>
    filterType === "method" ? "가공방식" : "재료";

  const onInputChange = () => {
    const checkedList = document.querySelectorAll(
      `input[name="${filterType}"]:checked`
    );
    if (filterType === "method" && setMethodList) {
      setMethodList(checkedList);
    }
    if (filterType === "material" && setMaterialList) {
      setMaterialList(checkedList);
    }
    setCheckedList(checkedList);
  };

  return (
    <S.Form onClick={onToggle} checkedList={checkedList}>
      <span>
        {getFilterType(filterType)}
        {checkedList.length > 0 && `(${checkedList?.length})`}
      </span>
      <ArrowDropdown />
      {isToggle && (
        <S.Dropbox onClick={(e) => e.stopPropagation()}>
          {React.Children.toArray(
            dataList.map((item) => (
              <S.DropboxSet>
                <input
                  onChange={onInputChange}
                  type="checkbox"
                  id={item}
                  name={filterType}
                  value={item}
                />
                <label htmlFor={item}>{item}</label>
              </S.DropboxSet>
            ))
          )}
        </S.Dropbox>
      )}
    </S.Form>
  );
};

export default Dropdown;
