import { createElement } from "react";
import axios from "../api/axios"
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { EventModel } from "../models/EventModel";
import { Cookies } from '../util/Cookies';

const EventRepo = {

  async getAllEvent(): Promise<EventModel[]> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get<EventModel[]>(
      "getAllEvent",
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      }
    );
    // console.log(token);
    return response.data;
  },
  async saveEvent(id: string, eventName: string, eventType: string, eventDate: string, eventTime: string, eventLocation: string, attendance: string, offering: string, statusName: string, isUpdate: boolean, description: string, file: File): Promise<ApiResponseModel<EventModel>> {
    const token = Cookies.getCookie("auth_token");
    const formData = new FormData();
    formData.append("id", id);
    formData.append("eventName", eventName);
    formData.append("eventType", eventType);
    formData.append("eventDate", eventDate);
    formData.append("eventTime", eventTime);
    formData.append("eventLocation", eventLocation);
    formData.append("attendance", attendance);
    formData.append("offering", offering);
    formData.append("statusName", statusName);
    formData.append("description", description);
    formData.append("isUpdate", isUpdate.toString());
    formData.append("file", file);


    const response = await axios.post<ApiResponseModel<EventModel>>(
      "saveEvent",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        },
      }
    );

    return response.data;
  },
  async deleteEvent(id: number): Promise<ApiResponseModel<any>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.delete<ApiResponseModel<any>>(
      `deleteEvent?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
   async getEvent(id: number): Promise<ApiResponseModel<EventModel>> {
    const token = Cookies.getCookie("auth_token");
    const response = await axios.get<ApiResponseModel<EventModel>>(
      `getEvent?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },


};

export default EventRepo;