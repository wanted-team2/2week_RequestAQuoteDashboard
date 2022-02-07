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
