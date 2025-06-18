import { configureStore } from '@reduxjs/toolkit';
import ministryReducer from './staff/church_record/MinistrySlice';
import loaderReducer from './dialog/LoaderSlice';
import SuccessReducer from './dialog/SuccessSlice'
export const store = configureStore({
  reducer: {
    ministryForm: ministryReducer,
    loader:loaderReducer,
    success_dialog:SuccessReducer
    // ... other reducers
  },
});

// 👇 Add these lines
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;