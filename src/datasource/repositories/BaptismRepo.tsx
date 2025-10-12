import axios from "../../api/axios"
import { Cookies } from "../../util/Cookies";
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { BaptismResponseModel } from "../models/baptism/BaptismResponseModel";
import type { BaptismScheduleModel } from "../models/baptism/BaptismScheduleModel";
import type { BaptismStatusModel } from "../models/baptism/BaptismStatusModel";
import type { CertificateStatusModel } from "../models/baptism/CertificateStatusModel";
import type { RegistrationModel } from "../models/User/RegistrationModel";
import type { UserAndIdModel } from "../models/User/UserAndIdModel";
import { HandleResponse } from "./component/HandleResponse";
export const BaptismRepo = () => {
    const handleResponse = HandleResponse();
    return (
        {
            async submitBaptism(model: RegistrationModel): Promise<ApiResponseModel<any>> {
                const response = await axios.post<ApiResponseModel<any>>('submitBaptism', model);
                return response.data;
            },
            async getBaptism(query: string, page: number): Promise<ApiResponseModel<BaptismResponseModel[]>> {
                const token = Cookies.getCookie("auth_token");
                const response = await axios.get<ApiResponseModel<BaptismResponseModel[]>>(`getBaptism?query=${query}&page=${page}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                return handleResponse.commonResponse(response);
            },
            async getOfficiants(): Promise<ApiResponseModel<UserAndIdModel[]>> {
                const token = Cookies.getCookie("auth_token");
                const response = await axios.get<ApiResponseModel<UserAndIdModel[]>>(`getOfficiants`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                 return handleResponse.commonResponse(response);
            },
            async getCertificateStatuses(): Promise<ApiResponseModel<CertificateStatusModel[]>> {
                const token = Cookies.getCookie("auth_token");
                const response = await axios.get<ApiResponseModel<CertificateStatusModel[]>>(`getCertificateStatuses`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                 return handleResponse.commonResponse(response);
            },
            async getBaptismStatuses(): Promise<ApiResponseModel<BaptismStatusModel[]>> {
                const token = Cookies.getCookie("auth_token");
                const response = await axios.get<ApiResponseModel<BaptismStatusModel[]>>(`getBaptismStatuses`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                 return handleResponse.commonResponse(response);
            },
            async scheduleBaptism(model: BaptismScheduleModel): Promise<ApiResponseModel<any>> {
                const token = Cookies.getCookie("auth_token");
                const response = await axios.put<ApiResponseModel<any>>(`scheduleBaptism`, model, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                 return handleResponse.commonResponse(response);
            },
        }
    )
}
