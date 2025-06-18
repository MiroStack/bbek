import { createSlice } from '@reduxjs/toolkit';
interface LoaderFormState {
  value: boolean;
}
const initialState: LoaderFormState = {
  value: false,
};
const LoaderSlice = createSlice({
  name: 'showCreateLoader',
  initialState: {
    value: false,
  },
  reducers: {
    showLoader: (state) => {
      state.value=true;
    },
    hideLoader: (state) => {
      state.value=false;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = LoaderSlice.actions;
export const { showLoader, hideLoader } = LoaderSlice.actions;
export default LoaderSlice.reducer;