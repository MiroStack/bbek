import { createSlice } from '@reduxjs/toolkit';
interface SuccessDialogFormState {
  value: boolean;
}
const initialState: SuccessDialogFormState = {
  value: false,
};
const SuccessDialogSlice = createSlice({
  name: 'showSuccessDialog',
  initialState: {
    value: false,
  },
  reducers: {
    showSuccessDialog: (state) => {
      state.value=true;
    },
    hideSuccessDialog: (state) => {
      state.value=false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = SuccessDialogSlice.actions;
export const { showSuccessDialog, hideSuccessDialog } = SuccessDialogSlice.actions;
export default SuccessDialogSlice.reducer;