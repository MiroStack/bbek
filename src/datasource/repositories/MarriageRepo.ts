import axios from '../../api/axios';
import { Cookies } from '../../util/Cookies';
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { MarriageLocationsModel } from '../models/Marriage/MarriageLocationsModel';
import type { MarriageModel } from '../models/Marriage/MarriageModel';
import type { MarriageStatusesModel } from '../models/Marriage/MarriageStatusesModel';
export const MarriageRepo = {
    async getaAllMarriageStatus(): Promise<ApiResponseModel<MarriageStatusesModel[]>> {
        const token = Cookies.getCookie("auth_token");
        const response = await axios.get<ApiResponseModel<MarriageStatusesModel[]>>('getAllMarriageStatuses', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },

    async getaAllMarriageLocation(): Promise<ApiResponseModel<MarriageLocationsModel[]>> {
        const token = Cookies.getCookie("auth_token");
        const response = await axios.get<ApiResponseModel<MarriageLocationsModel[]>>('getAllMarriageLocations', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },

    async deleteMarriage(id: number): Promise<ApiResponseModel<any>> {
        const token = Cookies.getCookie("auth_token");
        const response = await axios.delete(`deleteMarriageRecord?id=${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },
    async getAllMarriage(): Promise<ApiResponseModel<MarriageModel[]>> {
        const token = Cookies.getCookie("auth_token");
        const response = await axios.get<ApiResponseModel<MarriageModel[]>>('getAllMarriageRecord', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },

   async submitMarriage(marriageModel: any, isUpdate: boolean): Promise<ApiResponseModel<any>> {
        const token = Cookies.getCookie("auth_token");
        const response = await axios.post<ApiResponseModel<any>>("submitMarriageRecord",
            {
                entity: marriageModel,
                update: isUpdate
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

        );
        return response.data;
    }

};