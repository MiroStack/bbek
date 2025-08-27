// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
interface OfferingFormState {
  value: boolean;
  edit:boolean;
}
const initialState: OfferingFormState = {
  value: false,
  edit:false
};
const OfferingSlice = createSlice({
  name: 'showCreateOffering',
  initialState: {
    value: initialState.value,
    edit:initialState.edit
  },
  reducers: {
    showCreateOffering: (state) => {
      state.value=true;
    },
    hideCreateOffering: (state) => {
      state.value=false;
    },
    showUpdateOffering: (state) => {
      state.edit=true;  
    },
    hideUpdateOffering: (state) => {
      state.edit=false;
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = OfferingSlice.actions;
export const { showCreateOffering, hideCreateOffering, showUpdateOffering, hideUpdateOffering } = OfferingSlice.actions;
export default OfferingSlice.reducer;