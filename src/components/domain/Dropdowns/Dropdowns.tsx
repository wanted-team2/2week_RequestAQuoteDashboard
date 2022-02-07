import React, { useEffect, useState } from "react";
import { Dropdown } from "@components/base";
import { icoRefresh } from "@assets";
import * as S from "./Style";

const datas = {
  method: ["선반", "밀링"],
  material: ["알루미늄", "탄소강", "구리", "합금강", "강철"],
};

export type FilterType = "method" | "material";

export type NodeListType = NodeListOf<Element> | never[] | undefined;

const Dropdowns = () => {
  const [methodList, setMethodList] = useState<NodeListType>([]);
  const [materialList, setMaterialList] = useState<NodeListType>([]);
  const [hasList, setHasList] = useState(false);

  useEffect(() => {
    if (methodList && materialList) {
      if (methodList.length === 0 && materialList.length === 0) {
        setHasList(false);
      } else setHasList(true);
    }
  }, [methodList, materialList]);

  return (
    <S.DropdownsWrapper>
      <Dropdown
        filterType="method"
        dataList={datas["method"]}
        setMethodList={setMethodList}
      />
      <Dropdown
        filterType="material"
        dataList={datas["material"]}
        setMaterialList={setMaterialList}
      />
      {hasList && (
        <S.ResetButton>
          <img src={icoRefresh} alt="필터링 리셋" />
          <span>필터링 리셋</span>
        </S.ResetButton>
      )}
    </S.DropdownsWrapper>
  );
};

export default Dropdowns;
