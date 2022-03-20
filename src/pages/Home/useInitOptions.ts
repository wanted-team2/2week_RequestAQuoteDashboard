import { useAppDispatch, useAppSelector } from '@redux/store';
import { initMaterial, initMethod, selectOption } from '@redux/optionSlice';
import { useEffect } from 'react';
import { makeCheckList } from '@utils/functions';
import { CardListQuery } from '@pages/Home/Home';

const useInitOptions = (data: CardListQuery | undefined) => {
  const appDispatch = useAppDispatch();
  const { method: methodList, material: materialList } =
    useAppSelector(selectOption);

  useEffect(() => {
    if (!data) {
      return;
    }
    const { cardList } = data;

    appDispatch(initMethod(makeCheckList(cardList, 'method')));
    appDispatch(initMaterial(makeCheckList(cardList, 'material')));
  }, [data]);

  return { methodList, materialList };
};

export default useInitOptions;
