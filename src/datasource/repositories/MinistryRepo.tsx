import axios from "../../api/axios";
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { MinistryModel } from "../models/Ministry/MinistryModel";
import { Cookies } from "../../util/Cookies";
import type { PaginatedMinistryModel } from "../models/Ministry/PaginatedMinistryModel";
import type { MinistryStatusModel } from "../models/Ministry/MinistryStatusModel";
import { HandleResponse } from "./component/HandleResponse";

export const MinistryRepo = () => {
  const handleResponse = HandleResponse();
  return {
    async saveMinistry(
      id: number,
      member: number,
      description: string,
      department: string,
      ministryName: string,
      statusName: string,
      leader: string,
      schedule: string,
      startTime: string,
      endTime: string,
      file: File | null,
      isUpdate: boolean
    ): Promise<ApiResponseModel<any>> {
      const formData = new FormData();
      const token = Cookies.getCookie("auth_token");
      // Append each field individually for @RequestParam
      formData.append("id", id.toString());
      formData.append("member", member.toString());
      formData.append("description", description);
      formData.append("ministryName", ministryName);
      formData.append("statusName", statusName);
      formData.append("leader", leader);
      formData.append("department", department);
      formData.append("schedule", schedule);
      formData.append("startTime", startTime);
      formData.append("endTime", endTime);

      formData.append("isUpdate", isUpdate.toString());
      if (file!) {
        formData.append("file", file);
      }

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
    async getAllMinistry(
      query: string,
      page: number
    ): Promise<MinistryModel[]> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<MinistryModel[]>(
        `getAllMinistry?query=${query}&page=${page}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(token);
      return handleResponse.commonResponse(response);
    },

    async getAllLadies(query: string, page: number): Promise<MinistryModel[]> {
      const response = await axios.get<MinistryModel[]>(
        `ministriesOfAllLadies?query=${query}&page=${page}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(token);
      return handleResponse.commonResponse(response);
    },

    async getAllMen(query: string, page: number): Promise<MinistryModel[]> {
      const response = await axios.get<MinistryModel[]>(
        `ministriesOfAllMen?query=${query}&page=${page}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(token);
      return handleResponse.commonResponse(response);
    },

    async getYoungPeople(
      query: string,
      page: number
    ): Promise<MinistryModel[]> {
      const response = await axios.get<MinistryModel[]>(
        `ministriesOfAllYoungPeople?query=${query}&page=${page}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(token);
      return handleResponse.commonResponse(response);
    },
    async getUserMinistries(
      query: string,
      page: number
    ): Promise<ApiResponseModel<MinistryModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<MinistryModel[]>>(
        `ministriesOfUser?query=${query}&page=${page}`,
        {
          headers: {
           "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(token);
      return handleResponse.commonResponse(response);
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
    async getMinistryById(
      id: number
    ): Promise<ApiResponseModel<MinistryModel>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<MinistryModel>>(
        `getMinistry?id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async getUpcomingMinistries(): Promise<ApiResponseModel<MinistryModel[]>> {
      const response = await axios.get<ApiResponseModel<MinistryModel[]>>(
        "getUpcomingMinistry",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },

    async getPaginatedMinistries(
      query: string,
      page: number
    ): Promise<ApiResponseModel<PaginatedMinistryModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<
        ApiResponseModel<PaginatedMinistryModel[]>
      >(`getPaginatedMinistry?query=${query}&page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return handleResponse.commonResponse(response);
    },

    async getMinistryStatuses(): Promise<
      ApiResponseModel<MinistryStatusModel[]>
    > {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<MinistryStatusModel[]>>(
        "getMinistryStatuses",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async joinMinistry(ministryId: number): Promise<ApiResponseModel<any>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.post<ApiResponseModel<any>>(
        `joinMinistry?ministryId=${ministryId}`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },
  };
};
