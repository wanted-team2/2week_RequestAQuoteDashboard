import * as S from './Style';

interface NotiBoxProps {
  text: string;
}

const NotiBox = ({ text }: NotiBoxProps) => {
  return <S.Container>{text}</S.Container>;
};

export default NotiBox;
