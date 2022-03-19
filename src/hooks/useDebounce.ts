import { useCallback } from 'react';

const useDebounce = (ms: number, deps = []) => {
  let timeId: NodeJS.Timer | null;
  return useCallback((cb) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      cb();
      timeId = null;
    }, ms);
  }, deps);
};

export default useDebounce;
