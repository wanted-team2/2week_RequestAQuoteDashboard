import { objectTypes } from '@pages/Home/Home';
import { ICardData } from '@models/CardData';
import { FilterType } from '@components/domain/Dropdowns/Dropdowns';

export const getObjectLength = <T>(object: T) => Object.keys(object).length;

export const getTrutyObjectLength = (object: objectTypes) =>
  Object.values(object).filter((v) => v).length;

export const setAllValueToFalse = (object: objectTypes) => {
  const newObject: objectTypes = {};
  for (const key in object) {
    newObject[key] = false;
  }
  return newObject;
};

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>)
    );
  }
}

export const filterCard = (
  data: ICardData[],
  methodList: objectTypes,
  materialList: objectTypes,
  isToggle: boolean
) => {
  const checkedMethod = Object.entries(methodList)
    .filter(([_, checked]) => checked)
    .map(([key, _]) => key);
  const checkedMaterial = Object.entries(materialList)
    .filter(([_, checked]) => checked)
    .map(([key, _]) => key);

  if (isToggle) {
    data = data.filter(({ status }) => status === '상담중');
  }

  if (checkedMethod.length === 0 && checkedMaterial.length === 0) {
    return data;
  }
  if (checkedMethod.length !== 0 && checkedMaterial.length === 0) {
    return data.filter(
      (v) => v.method.filter((char) => checkedMethod.includes(char)).length
    );
  }
  if (checkedMethod.length === 0 && checkedMaterial.length !== 0) {
    return data.filter(
      (v) => v.material.filter((char) => checkedMaterial.includes(char)).length
    );
  }
  return data.filter(
    (v) =>
      v.method.filter((char) => checkedMethod.includes(char)).length &&
      v.material.filter((char) => checkedMaterial.includes(char)).length
  );
};

export const makeCheckList = (
  data: ICardData[] | null | undefined,
  type: FilterType
) =>
  data
    ? data.reduce((checkList, v) => {
        v[type].forEach((methodItem) => {
          checkList[methodItem] = false;
        });
        return checkList;
      }, {} as objectTypes)
    : {};
