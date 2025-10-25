// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import type { BaptismResponseModel } from '../../../models/baptism/BaptismResponseModel';
interface MemberliceState {
  edit:boolean;
  add:boolean;
  model?:BaptismResponseModel|null
}
const initialState: MemberliceState = {
  edit:false,
  add:false,
  model:null
};
const Memberlice = createSlice({
  name: 'showViewDetails',
  initialState: initialState,
  reducers: {
    showUpdateBaptism: (state, action: { payload: BaptismResponseModel|null }) => {
      state.edit = true;
      state.model = action.payload;
    },
    hideUpdateBaptism: (state) => {
      state.edit=false;
    },
    showAddMember: (state) => {
      state.add=true;
    }
    ,
    hideAddMember: (state) => {
      state.add=false;
    }
    ,
    hideAllMember:(state)=>{
      state = initialState;
    }

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = EventSlice.actions;
export const { showUpdateBaptism, hideUpdateBaptism, showAddMember, hideAllMember, hideAddMember} = Memberlice.actions;
export default Memberlice.reducer;