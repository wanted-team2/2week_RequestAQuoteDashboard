import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ListItem = {
  name: string;
  checked: boolean;
};

export interface OptionSliceState {
  method: ListItem[];
  material: ListItem[];
}

const initialState: OptionSliceState = {
  method: [],
  material: [],
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    initMethod(state, { payload }: PayloadAction<ListItem[]>) {
      state.method = payload;
    },
    initMaterial(state, { payload }: PayloadAction<ListItem[]>) {
      state.material = payload;
    },
    changeMethod(state, { payload }: PayloadAction<string>) {
      const target = state.method.find(({ name }) => name === payload)!;
      target.checked = !target.checked;
    },
    changeMaterial(state, { payload }: PayloadAction<string>) {
      const target = state.material.find(({ name }) => name === payload)!;
      target.checked = !target.checked;
    },
    reset(state) {
      state.method.forEach((v) => (v.checked = false));
      state.material.forEach((v) => (v.checked = false));
    },
  },
});

export const { reset, initMaterial, initMethod, changeMethod, changeMaterial } =
  optionSlice.actions;

export default optionSlice;
