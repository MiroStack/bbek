import { createSlice } from '@reduxjs/toolkit';
interface DialogSliceFormState {
  success: boolean;
  error: boolean;
  warning: boolean;
  loader: boolean;
  relogin:boolean;
}
const initialState: DialogSliceFormState = {
  success: false,
    error: false,
    warning: false,
    loader: false,
    relogin:false,
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
    showRelogin: (state) => {
      state.relogin=true;
    },
    hideRelogin: (state) => {
      state.relogin=false;
    },
    // increment: (state) => {
    //   state.value += 1;
    // },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = SuccessDialogSlice.actions;
export const { showSuccessDialog, hideSuccessDialog, showWarningDialog, hideWarningDialog, showErrorDialog, hideErrorDialog, showLoader, hideLoader, showRelogin, hideRelogin } = DialogSlice.actions;
export default DialogSlice.reducer;