import axios from "../../api/axios";
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { MinistryModel } from "../models/Ministry/MinistryModel";
import { Cookies } from "../../util/Cookies";
import type { PaginatedMinistryModel } from "../models/Ministry/PaginatedMinistryModel";
import type { MinistryStatusModel } from "../models/Ministry/MinistryStatusModel";
import { HandleResponse } from "./component/HandleResponse";
import type { MinistryMemberModel } from "../models/Ministry/MinistryMemberModel";
import type { TotalMinistryModel } from "../models/Ministry/TotalMinistryModel";

export const MinistryRepo = () => {
  const handleResponse = HandleResponse();
  return {
    async saveMinistry(
      id: number,
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
      formData.append("ministryName", ministryName);
      formData.append("scheduleDay", schedule);
      formData.append("startTime", startTime);
      formData.append("endTime", endTime);
      formData.append("ministryLeader", leader);
      formData.append("department", department);
      formData.append("status", statusName);
      formData.append("update", isUpdate.toString());
      formData.append("description", description);
      formData.append("ministryImage", file ? file : new Blob());

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

    async viewMembersOfMinistries(
      ministryId: number,
      query: string,
      page: number
    ): Promise<ApiResponseModel<MinistryMemberModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<any>>(
        `viewMembersOfMinistries?ministryId=${ministryId}&query=${query}&page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },
    async viewTotalMembersPerMinistry(
      ministryId: number
    ): Promise<ApiResponseModel<number>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<number>>(
        `viewTotalMembersPerMinistry?ministryId=${ministryId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },
    async getTotalMinistryAndMembers(
    ): Promise<ApiResponseModel<TotalMinistryModel>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<TotalMinistryModel>>(
        `getTotalMinistryAndMembers`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },
    async updateMemberApplication(pivotId: number, statusName: string): Promise<ApiResponseModel<any>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.put<ApiResponseModel<any>>(
        `updateMemberApplication?pivotId=${pivotId}&statusName=${statusName}`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    }
   

  };
};
