import React, { useState } from 'react';

const useHeaderSlide = () => {
  const [slideToggle, setSlideToggle] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as HTMLElement;
    const targetElem =
      target.closest('.menu-list') || target.closest('.toggle-button');
    if (!targetElem) {
      return;
    }
    if (targetElem.classList.contains('menu-list')) {
      return;
    }
    if (targetElem) {
      setSlideToggle(!slideToggle);
    }
  };
  return { slideToggle, handleToggleMenu };
};
export default useHeaderSlide;
