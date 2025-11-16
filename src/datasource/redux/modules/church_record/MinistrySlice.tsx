// src/redux/counterSlice.js
import { hide } from '@popperjs/core';
import { createSlice } from '@reduxjs/toolkit';
interface MinistryFormState {
  value: boolean;
  edit:boolean;
  memberApplicationEdit:boolean;
}
const initialState: MinistryFormState = {
  value: false,
  edit:false,
  memberApplicationEdit:false
};
const ministrySlice = createSlice({
  name: 'showCreateMinistry',
  initialState: {
    value: initialState.value,
    edit:initialState.edit,
    memberApplicationEdit:initialState.memberApplicationEdit
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
    showUpdateMemberApplication: (state) => {
      state.memberApplicationEdit=true;  
    },
    hideUpdateMemberApplication: (state) => {
      state.memberApplicationEdit=false;
    },
    hideAllMinistryForm:(state)=>{
      state.value=false;
      state.edit=false;
      state.memberApplicationEdit=false;
    }

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = ministrySlice.actions;
export const { showMinistry, hideMinistry, showUpdateMinistry, hideUpdateMinistry, hideAllMinistryForm,hideUpdateMemberApplication,showUpdateMemberApplication } = ministrySlice.actions;
export default ministrySlice.reducer;