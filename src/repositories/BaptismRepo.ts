import axios from "../api/axios"
import type { ApiResponseModel } from "../models/ApiResponseModel";
const BaptismRepo = {
    async submitBaptism(firstname: string, lastname: string, email: string, phoneNumber: string, testimony: string): Promise<ApiResponseModel<any>> {
        const response = await axios.post<ApiResponseModel<any>>('submitBaptism', {
            firstname,
            lastname,
            email,
            phoneNumber,
            testimony,
        });
        return response.data;
    },
}
export default BaptismRepo;