// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
interface MarriageFormState {
  value: boolean;
  edit:boolean;
}
const initialState: MarriageFormState = {
  value: false,
  edit:false
};
const MarriageSlice = createSlice({
  name: 'showCreateMarriage',
  initialState: {
    value: initialState.value,
    edit:initialState.edit
  },
  reducers: {
    showCreateMarriage: (state) => {
      state.value=true;
    },
    hideCreateMarriage: (state) => {
      state.value=false;
    },
    showUpdateMarriage: (state) => {
      state.edit=true;  
    },
    hideUpdateMarriage: (state) => {
      state.edit=false;
    },
    

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = MarriageSlice.actions;
export const { showCreateMarriage, hideCreateMarriage, showUpdateMarriage, hideUpdateMarriage } = MarriageSlice.actions;
export default MarriageSlice.reducer;