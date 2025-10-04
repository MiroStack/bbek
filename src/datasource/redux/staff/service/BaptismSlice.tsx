// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import type { BaptismResponseModel } from '../../../models/baptism/BaptismResponseModel';
interface BaptismSliceState {
  edit:boolean;
  model?:BaptismResponseModel|null
}
const initialState: BaptismSliceState = {
  edit:false,
  model:null
};
const BaptismSlice = createSlice({
  name: 'showBaptism',
  initialState: initialState,
  reducers: {
    showUpdateBaptism: (state, action: { payload: BaptismResponseModel|null }) => {
      state.edit = true;
      state.model = action.payload;
    },
    hideUpdateBaptism: (state) => {
      state.edit=false;
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = EventSlice.actions;
export const { showUpdateBaptism, hideUpdateBaptism} = BaptismSlice.actions;
export default BaptismSlice.reducer;