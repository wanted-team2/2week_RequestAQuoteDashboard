import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import optionSlice from './optionSlice';

export const store = configureStore({
  reducer: {
    [optionSlice.name]: optionSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
