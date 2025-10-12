import axios from "../../api/axios";
import { Cookies } from "../../util/Cookies";
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { MemberModel } from "../models/member/MemberModel";
import { HandleResponse } from "./component/HandleResponse";

export const MemberRepo = ()=> {
    const handleResponse = HandleResponse();
    return({
        async getMembers(query: string, page: number): Promise<ApiResponseModel<MemberModel[]>> {
        const token = Cookies.getCookie("auth_token");
        const response = await axios.get<ApiResponseModel<MemberModel[]>>(`getMembers?query=${query}&page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return handleResponse.commonResponse(response);
    },
    });

}
