import axios from '../../api/axios';
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { LoginResponseModel } from '../models/LoginResponseModel';
import type { TokenResponseModel } from '../models/TokenResponse';
import type { UserInfoModel } from '../models/User/UserInfoModel';

const AuthRepo = {
  async login(username: string, password: string): Promise<ApiResponseModel<LoginResponseModel>> {
    const response = await axios.post<ApiResponseModel<LoginResponseModel>>('login', {
      username,
      password,
    });
    return response.data;
  },

 async validate(token:string): Promise<ApiResponseModel<UserInfoModel>> {
  const response = await axios.get<ApiResponseModel<UserInfoModel>>(`validate?token=${token}`);
  return response.data;
 } 
};

export default AuthRepo;
