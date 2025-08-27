import axios from '../../api/axios';
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { LoginResponseModel } from '../models/LoginResponseModel';
import type { TokenResponseModel } from '../models/TokenResponse';

const AuthRepo = {
  async login(username: string, password: string): Promise<ApiResponseModel<LoginResponseModel>> {
    const response = await axios.post<ApiResponseModel<LoginResponseModel>>('login', {
      username,
      password,
    });
    return response.data;
  },

 async validate(token:string): Promise<ApiResponseModel<TokenResponseModel>> {
  const response = await axios.get<ApiResponseModel<TokenResponseModel>>(`validate?token=${token}`);
  return response.data;
 } 
};

export default AuthRepo;
