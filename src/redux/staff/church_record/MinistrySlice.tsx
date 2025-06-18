// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
interface MinistryFormState {
  value: boolean;
}
const initialState: MinistryFormState = {
  value: false,
};
const ministrySlice = createSlice({
  name: 'showCreateMinistry',
  initialState: {
    value: false,
  },
  reducers: {
    showMinistry: (state) => {
      state.value=true;
    },
    hideMinistry: (state) => {
      state.value=false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = ministrySlice.actions;
export const { showMinistry, hideMinistry } = ministrySlice.actions;
export default ministrySlice.reducer;