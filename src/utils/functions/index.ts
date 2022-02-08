import { objectTypes } from "@components/domain/Dropdowns/Dropdowns";

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
  ...args: Parameters<T["addEventListener"]> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>)
    );
  }
}
