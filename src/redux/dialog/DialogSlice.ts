import { createSlice } from '@reduxjs/toolkit';
interface DialogSliceFormState {
  success: boolean;
  error: boolean;
  warning: boolean;
  loader: boolean;
}
const initialState: DialogSliceFormState = {
  success: false,
    error: false,
    warning: false,
    loader: false,
};
const DialogSlice = createSlice({
  name: 'showSuccessDialog',
  initialState: initialState,
  reducers: {
    showSuccessDialog: (state) => {
      state.success=true;
    },
    hideSuccessDialog: (state) => {
      state.success=false;
    },
    showWarningDialog: (state) => {
      state.warning=true;
    },
    hideWarningDialog: (state) => {
      state.warning=false;
    },
    showErrorDialog: (state) => {
      state.error=true;
    },
    hideErrorDialog: (state) => {
      state.error=false;
    },
    showLoader: (state) => {
      state.loader=true;
    },
    hideLoader: (state) => {
      state.loader=false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = SuccessDialogSlice.actions;
export const { showSuccessDialog, hideSuccessDialog, showWarningDialog, hideWarningDialog, showErrorDialog, hideErrorDialog, showLoader, hideLoader } = DialogSlice.actions;
export default DialogSlice.reducer;