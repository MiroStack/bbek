import axios from '../../api/axios';
import { Cookies } from '../../util/Cookies';
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { LoginResponseModel } from '../models/LoginResponseModel';
import type { OfferingModel } from '../models/Offering/OfferingModel';
import type { OfferingPaymentModel } from '../models/Offering/OfferingPaymentModel';
import type { OfferingTypeModel } from '../models/Offering/OfferingTypeModel';
import type { PaginatedOfferingModel } from '../models/Offering/PaginatedOfferingModel';
import type { TokenResponseModel } from '../models/TokenResponse';

const OfferingRepo = {
  async getPaymentRf(): Promise<ApiResponseModel<OfferingPaymentModel[]>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get<ApiResponseModel<OfferingPaymentModel[]>>('getPaymentRf', {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    }
    );
    return response.data;
  },
  async getOfferingTypeRf(): Promise<ApiResponseModel<OfferingTypeModel[]>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get<ApiResponseModel<OfferingTypeModel[]>>('getOfferingType', {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    });
    return response.data;
  },
  async submitOffering(offeringModel: OfferingModel, isUpdate: boolean): Promise<ApiResponseModel<any>> {
    const token = Cookies.getCookie("auth_token");
    const formData = new FormData();
    const response = await axios.post<ApiResponseModel<any>>(`submitOffering?isUpdate=${isUpdate}`, 
      offeringModel,{

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    return response.data;
  },
  async getAllOffering(query:string, page:number): Promise<ApiResponseModel<PaginatedOfferingModel[]>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get(`getAllOffering?query=${query}&page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  },
  async deleteOffering(id: number): Promise<ApiResponseModel<any>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.delete(`deleteOffering?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }

};

export default OfferingRepo;
