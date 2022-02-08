import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  ReactChild,
  ReactChildren,
} from 'react';
import useToggle from '@hooks/useToggle';
import * as S from './Style';

interface ForwardProps {
  isToggle: false;
  disabled: false;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  children: ReactChild | ReactChildren;
  name: string;
}

const Toggle = forwardRef(
  (
    {
      isToggle,
      disabled,
      onChange,
      name,
      children,
      ...props
    }: Partial<ForwardProps>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isToggle: checked, onToggle } = useToggle({
      initialState: isToggle,
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      onToggle();
      onChange && onChange(e);
    };

    return (
      <S.ToggleContainer {...props}>
        <S.ToggleInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          name={name}
        />
        <S.ToggleSwitch />
        <S.Text>{children}</S.Text>
      </S.ToggleContainer>
    );
  }
);

export default Toggle;
