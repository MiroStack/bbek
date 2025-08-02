import { configureStore } from '@reduxjs/toolkit';
import ministryReducer from './staff/church_record/MinistrySlice';
import dialogReducer from './dialog/DialogSlice';
export const store = configureStore({
  reducer: {
    ministryForm: ministryReducer,
    dialog:dialogReducer,
    // ... other reducers
  },
});

// 👇 Add these lines
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;