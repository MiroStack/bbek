import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserInfoModel } from '../../models/User/UserInfoModel';
interface UserState {
  value: UserInfoModel;
}
const initialState: UserState = {
  value: {
      firstname: '',
      middlename: '',
      lastname: '',
      age: 0,
      birthdate: '',
      address: '',
      email: '',
      createdDate: '',
      contactNo: '',
      emergencyContactPerson: '',
      emergencyContactNo: '',
      gender: '',
      imageUUID: '',
      role: ''
  },
};
const UserSlice = createSlice({
  name: 'setUserInfo',
  initialState: {
    value: initialState.value,
  },
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfoModel>) => {
      state.value = action.payload;
    },
    clearUserInfo:(state)=>{
      sessionStorage.removeItem("userInfo");
      state.value = initialState.value;
    }
  },
});

// export const { increment, decrement, incrementByAmount } = EventSlice.actions;
export const { clearUserInfo, setUserInfo } = UserSlice.actions;
export default UserSlice.reducer;