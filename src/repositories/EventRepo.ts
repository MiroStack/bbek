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

  
};

export default EventRepo;