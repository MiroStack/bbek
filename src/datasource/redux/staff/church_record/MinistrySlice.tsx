// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
interface MinistryFormState {
  value: boolean;
  edit:boolean;
}
const initialState: MinistryFormState = {
  value: false,
  edit:false
};
const ministrySlice = createSlice({
  name: 'showCreateMinistry',
  initialState: {
    value: initialState.value,
    edit:initialState.edit
  },
  reducers: {
    showMinistry: (state) => {
      state.value=true;
    },
    hideMinistry: (state) => {
      state.value=false;
    },
    showUpdateMinistry: (state) => {
      state.edit=true;  
    },
    hideUpdateMinistry: (state) => {
      state.edit=false;
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = ministrySlice.actions;
export const { showMinistry, hideMinistry, showUpdateMinistry, hideUpdateMinistry } = ministrySlice.actions;
export default ministrySlice.reducer;