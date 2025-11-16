// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
interface EventFormState {
  value: boolean;
  edit:boolean;
  memberApplicationEdit:boolean;
}
const initialState: EventFormState = {
  value: false,
  edit:false,
  memberApplicationEdit:false
};
const EventSlice = createSlice({
  name: 'showCreateEvent',
  initialState: {
    value: initialState.value,
    edit:initialState.edit,
    memberApplicationEdit:initialState.memberApplicationEdit
  },
  reducers: {
    showCreateEvent: (state) => {
      state.value=true;
    },
    hideCreateEvent: (state) => {
      state.value=false;
    },
    showUpdateEvent: (state) => {
      state.edit=true;  
    },
    hideUpdateEvent: (state) => {
      state.edit=false;
    },
     showUpdateEventMemberApplication: (state) => {
      state.memberApplicationEdit=true;  
    },
    hideUpdateEventMemberApplication: (state) => {
      state.memberApplicationEdit=false;
    },
    hideAllEventForm:(state)=>{
      state = initialState;
    }

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = EventSlice.actions;
export const { showCreateEvent, hideCreateEvent, showUpdateEvent, hideUpdateEvent, hideAllEventForm,showUpdateEventMemberApplication,hideUpdateEventMemberApplication } = EventSlice.actions;
export default EventSlice.reducer;