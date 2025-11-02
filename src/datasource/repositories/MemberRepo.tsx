import axios from "../../api/axios";
import type { EditMemberDetails } from "../../component/components/member/EditMemberDetails";
import { Cookies } from "../../util/Cookies";
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { AddBaptismRequestModel } from "../models/baptism/AddBaptismRequestModel";
import type { DepartmentModel } from "../models/member/DepartmentModel";
import type { MemberDetailsModel } from "../models/member/MemberDetailsModel";
import type { MemberModel } from "../models/member/MemberModel";
import type { PositionModel } from "../models/member/PositionModel";
import type { PaginatedUserProfile } from "../models/User/PaginatedUserProfile";
import { HandleResponse } from "./component/HandleResponse";

export const MemberRepo = () => {
  const handleResponse = HandleResponse();
  return {
    async getMembers(
      query: string,
      page: number
    ): Promise<ApiResponseModel<MemberModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<MemberModel[]>>(
        `getMembers?query=${query}&page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async addMember(
      model: AddBaptismRequestModel
    ): Promise<ApiResponseModel<any>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.post<ApiResponseModel<any>>(
        `addMember`,
        model,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async getMemberDetails(
      memberId: number
    ): Promise<ApiResponseModel<MemberDetailsModel>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<MemberDetailsModel>>(
        `viewDetails/${memberId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async departments(): Promise<ApiResponseModel<DepartmentModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<DepartmentModel[]>>(
        `departments`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async positions(): Promise<ApiResponseModel<PositionModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<PositionModel[]>>(
        `positions`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async EditMemberDetails(
      model: MemberDetailsModel
    ): Promise<ApiResponseModel<PositionModel>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.post<ApiResponseModel<PositionModel>>(
        `editMemberDetails`,
        model,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return handleResponse.commonResponse(response);
    },

    async getPaginatedPriestMembers(
      query: string,
      page: number
    ): Promise<ApiResponseModel<PaginatedUserProfile[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<
        ApiResponseModel<PaginatedUserProfile[]>
      >(`ListOfPriest?query=${query}&page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return handleResponse.commonResponse(response);
    },

    async getPaginatedDepartmentMembers(
      query: string,
      page: number
    ): Promise<ApiResponseModel<PaginatedUserProfile[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<
        ApiResponseModel<PaginatedUserProfile[]>
      >(`ListOfDepartmentMember?query=${query}&page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return handleResponse.commonResponse(response);
    },
  };
};
