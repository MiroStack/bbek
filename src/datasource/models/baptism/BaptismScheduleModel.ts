import type { BaptismResponseModel } from "./BaptismResponseModel";

export interface BaptismScheduleModel {
   id:number;
   certificationId:number;
   baptismStatusId:number;
   baptismDate:string;
   location:string;
   baptismOfficiantId:number;
   baptismOfficiant:string;
   dateString:string;
   email:string;
}