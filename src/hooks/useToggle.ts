import React, { useState } from "react";

const useToggle = (initialState: boolean) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const onToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return { isToggle, onToggle };
};

export default useToggle;
