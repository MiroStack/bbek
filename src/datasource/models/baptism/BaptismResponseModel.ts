import type { UserInfoModel } from "../User/UserInfoModel";

export interface BaptismResponseModel {
    id: number;
    userInfoModel: UserInfoModel,
    testimony: string;
    preferred_dt: string;
    status: string;
    certificateStatus: string;
    location: string;
    baptismDate: string;
    scheduledDate: string;
    baptismOfficiant: string;
    baptismOfficiantId: number;
    createdDate: string;
    totalRows: number;
}