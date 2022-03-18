import { ListItem } from '@pages/Home/Home';
import { ICardData } from '@models/CardData';
import { FilterType } from '@components/domain/Dropdowns/Dropdowns';

export const setAllValueToFalse = (itemList: ListItem[]) =>
  itemList.map(({ name }) => ({ name, checked: false }));

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
  methodList: ListItem[],
  materialList: ListItem[],
  isToggle: boolean
) => {
  const checkedMethod = methodList
    .filter(({ checked }) => checked)
    .map(({ name }) => name);
  const checkedMaterial = materialList
    .filter(({ checked }) => checked)
    .map(({ name }) => name);

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
    ? Array.from(
        data.reduce((checkSet, v) => {
          v[type].forEach((item) => {
            checkSet.add(item);
          });
          return checkSet;
        }, new Set<string>())
      ).map((item) => ({ name: item, checked: false }))
    : [];
