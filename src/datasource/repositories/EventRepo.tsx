import axios from "../../api/axios"
import type { ApiResponseModel } from '../models/ApiResponseModel';
import type { EventModel } from "../models/Event/EventModel";
import { Cookies } from '../../util/Cookies';
import type { EventStatusModel } from "../models/Event/EventStatusModel";
import type { PaginatedEventsModel } from "../models/Event/PaginatedEventModel";
import { useAppDispatch } from "../redux/staff/hooks/hooks";
import { showErrorDialog, showRelogin } from "../redux/dialog/DialogSlice";
import { HandleResponse } from "./component/HandleResponse";


export const EventRepo = () => {

  const handleResponse = HandleResponse();
  return {
    async getAllEvent(query: string, page: number, selectedStatus: string): Promise<EventModel[]> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<EventModel[]>(
        `getAllEvent?query=${query}&page=${page}&status=${selectedStatus}`,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        }
      );

      // console.log(token);
      return response.data;
    },
    async saveEvent(id: string, eventName: string, eventType: string, eventStartDate: string, eventEndDate: string, eventLocation: string, attendance: string, offering: string, statusName: string, isUpdate: boolean, description: string, file: File | null): Promise<ApiResponseModel<EventModel>> {
      const token = Cookies.getCookie("auth_token");
      // Only append file if it's not null

      const formData = new FormData();
      formData.append("id", id);
      formData.append("eventName", eventName);
      formData.append("eventType", eventType);
      formData.append("eventStartDate", eventStartDate);
      formData.append("eventEndDate", eventEndDate);
      formData.append("eventLocation", eventLocation);
      formData.append("attendance", attendance);
      formData.append("offering", offering);
      formData.append("statusName", statusName);
      formData.append("description", description);
      formData.append("isUpdate", isUpdate.toString());
      if (file!) {
        formData.append("file", file);
      }


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
      return handleResponse.commonResponse(response);
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
      return handleResponse.commonResponse(response);
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
       return handleResponse.commonResponse(response);
    },

    async getUpcomingEvents(): Promise<ApiResponseModel<EventModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<EventModel[]>>(
        "upcomingEvents",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },

    async getEventImage(eventName: string): Promise<string> {
      const response = await axios.get(`event_image`, {
        params: { eventName },
        responseType: "arraybuffer", // get raw binary
      });

      // Convert binary to a blob URL
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      return URL.createObjectURL(blob);
    },

    async getEventStatuses(): Promise<ApiResponseModel<EventStatusModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<EventStatusModel[]>>('getAllEventStatuses', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      return handleResponse.commonResponse(response);
    },
    async getPaginatedEvents(query: string, page: number, selectedStatus: string): Promise<ApiResponseModel<PaginatedEventsModel[]>> {
      const token = Cookies.getCookie("auth_token");
      const response = await axios.get<ApiResponseModel<PaginatedEventsModel[]>>(`getPaginatedEvents?query=${query}&page=${page}&status=${selectedStatus}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      return handleResponse.commonResponse(response);

    }
  }


};

