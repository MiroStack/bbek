import axios from '../../api/axios';
import { Cookies } from '../../util/Cookies';
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { LoginResponseModel } from '../models/LoginResponseModel';
import type { OfferingModel } from '../models/Offering/OfferingModel';
import type { OfferingPaymentModel } from '../models/Offering/OfferingPaymentModel';
import type { OfferingTypeModel } from '../models/Offering/OfferingTypeModel';
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
  async submitOffering(offeringModel:OfferingModel, isUpdate:boolean):Promise<ApiResponseModel<any>>{
    const token = Cookies.getCookie("auth_token");
    const formData = new FormData();
    formData.append("id", offeringModel.id);
    formData.append("memberName", offeringModel.memberName)
    formData.append("amount", offeringModel.amount.toString());
    formData.append("offeringDate", offeringModel.offeringDate);
    formData.append("offeringType", offeringModel.offeringType);
    formData.append("paymentMethod", offeringModel.paymentMethod);
    formData.append("notes", offeringModel.notes);
    formData.append("isUpdate", isUpdate.toString());

    const response = await axios.post<ApiResponseModel<any>>('submitOffering',formData,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    return response.data;
  },
  async getAllOffering():Promise<ApiResponseModel<OfferingModel[]>>{
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get('getAllOffering',{
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      }
    });
    return response.data;
  }

};

export default OfferingRepo;
