import axios from "../../api/axios"
import type { ApiResponseModel } from "../models/ApiResponseModel";
import type { RegistrationModel } from "../models/User/RegistrationModel";
const BaptismRepo = {
    async submitBaptism(model:RegistrationModel): Promise<ApiResponseModel<any>> {
        const response = await axios.post<ApiResponseModel<any>>('submitBaptism', {
             model:model
        });
        return response.data;
    },
}
export default BaptismRepo;