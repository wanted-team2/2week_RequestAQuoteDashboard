import { useCallback, useState } from 'react';

const useToggle = ({ initialState = false }) => {
  const [isToggle, setState] = useState(initialState);
  const onToggle = useCallback(() => setState(() => !isToggle), [isToggle]);

  return { isToggle, onToggle, setState };
};

export default useToggle;
