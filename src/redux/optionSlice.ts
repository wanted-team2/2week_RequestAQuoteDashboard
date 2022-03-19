import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from '@pages/Home/Home';

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
    setMethod(state, { payload }: PayloadAction<ListItem>) {
      console.log(state.method);
    },
    setMaterial(state, { payload }: PayloadAction<ListItem>) {
      console.log(state.material);
    },
    reset(state) {
      console.log(state);
    },
  },
});

export default optionSlice;
