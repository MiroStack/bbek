import axios from "../../api/axios";
import { Cookies } from "../../util/Cookies";
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { AddBaptismRequestModel } from "../models/baptism/AddBaptismRequestModel";
import type { MemberDetailsModel } from "../models/member/MemberDetailsModel";
import type { MemberModel } from "../models/member/MemberModel";
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
      memberId:number
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

    
  };
};
