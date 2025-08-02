import axios from "../api/axios"
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { MinistryModel } from "../models/MinistryModel";
import { Cookies } from '../util/Cookies';

const MinistryRepo = {
  async saveMinistry(member: number, description: string, ministryName:string, statusId:number, leader:string, schedule:string, file:File): Promise<ApiResponseModel<any>> {
    const token = Cookies.getCookie("auth_token");
    const formData = new FormData();

    // Append each field individually for @RequestParam
    formData.append("member", member.toString());
    formData.append("description", description);
    formData.append("ministryName", ministryName);
    formData.append("statusId", statusId.toString());
    formData.append("leader", leader);
    formData.append("schedule", schedule);
    formData.append("file", file);

    const response = await axios.post<ApiResponseModel<any>>(
      "saveMinistry",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(token);
    return response.data;
  },
   async getAllMinistry(): Promise<MinistryModel[]> {
    const token = Cookies.getCookie("auth_token");

    const response = await axios.get<MinistryModel[]>(
      "getAllMinistry",
      {
        headers: {
          "Content-Type": "multipart/form-data" 
        },
      }
    );
    // console.log(token);
    return response.data;
  },

  
};

export default MinistryRepo;