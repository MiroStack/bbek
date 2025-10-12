// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import type { BaptismResponseModel } from '../../../models/baptism/BaptismResponseModel';
interface BaptismSliceState {
  edit:boolean;
  add:boolean;
  model?:BaptismResponseModel|null
}
const initialState: BaptismSliceState = {
  edit:false,
  add:false,
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
    showAddBaptism: (state) => {
      state.add=true;
    }
    ,
    hideAddBaptism: (state) => {
      state.add=false;
    }
    ,
    hideAllBaptism:(state)=>{
      state = initialState;
    }

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = EventSlice.actions;
export const { showUpdateBaptism, hideUpdateBaptism, showAddBaptism, hideAllBaptism, hideAddBaptism} = BaptismSlice.actions;
export default BaptismSlice.reducer;