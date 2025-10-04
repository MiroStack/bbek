import { configureStore } from '@reduxjs/toolkit';
import ministryReducer from './staff/church_record/MinistrySlice';
import dialogReducer from './dialog/DialogSlice';
import eventReducer from './staff/church_record/EventSlice';
import offeringReducer from './staff/church_record/OfferingSlice';
import marriageReducer from './staff/church_record/MarriageSlice';
import UserReducer from './user/UserSlice'
import BaptismReducer  from './staff/service/BaptismSlice';
export const store = configureStore({
  reducer: {
    ministryForm: ministryReducer,
    dialog:dialogReducer,
    eventForm: eventReducer,
    offeringForm: offeringReducer,
    marriageForm:marriageReducer,
    userInfo:UserReducer,
    baptism:BaptismReducer
    // ... other reducers
  },
});

// 👇 Add these lines
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;