import { useEffect, useRef } from 'react';
import useDebounce from '@hooks/useDebounce';

const useHeaderResize = () => {
  const headerRef = useRef<HTMLUListElement>(null);
  const debounce = useDebounce(500);

  useEffect(() => {
    const handleResize = (e: Event) => {
      debounce(() => {
        if ((e.target as Window).innerWidth < 768) {
          headerRef.current!.style.transition = '0.45s';
        } else {
          headerRef.current!.style.transition = 'none';
        }
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return headerRef;
};

export default useHeaderResize;
