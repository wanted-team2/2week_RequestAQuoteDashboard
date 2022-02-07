import { useCallback, useState } from 'react';

interface Toggle {
  (): void;
}

const useToggle = ({ initialState = false }): [boolean, Toggle, object] => {
  const [state, setState] = useState(initialState);
  const onToggle = useCallback(() => setState(() => !state), [state]);

  return [state, onToggle, setState];
};

export default useToggle;
