const useToggle = ({ initialState = false }) => {
  const [state, setState] = useState(initialState);
  const onToggle = useCallback(() => setState(() => !state), [state]);

  return {isToggle, onToggle, setState};
};

export default useToggle;
