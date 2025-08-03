import axios from "../api/axios"
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { MinistryModel } from "../models/MinistryModel";
import { Cookies } from '../util/Cookies';

const MinistryRepo = {
  async saveMinistry(id: number, member: number, description: string, ministryName: string, statusName: string, leader: string, schedule: string, file: File, isUpdate: boolean): Promise<ApiResponseModel<any>> {
    const formData = new FormData();
    const token = Cookies.getCookie("auth_token");
    // Append each field individually for @RequestParam
    formData.append("id", id.toString());
    formData.append("member", member.toString());
    formData.append("description", description);
    formData.append("ministryName", ministryName);
    formData.append("statusName", statusName);
    formData.append("leader", leader);
    formData.append("schedule", schedule);
    formData.append("isUpdate", isUpdate.toString());
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

  async deleteMinistry(id: number): Promise<ApiResponseModel<any>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.delete<ApiResponseModel<any>>(
      `deleteMinistry?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  async getMinistryById(id: number): Promise<ApiResponseModel<MinistryModel>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get<ApiResponseModel<MinistryModel>>(
      `getMinistry?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

};

export default MinistryRepo;