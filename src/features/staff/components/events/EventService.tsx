
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import { useDispatch } from "react-redux";
import EventRepo from "../../../../datasource/repositories/EventRepo";
import { useNavigate } from "react-router-dom";
import type React from "react";
import { Cookies } from "../../../../util/Cookies";
import type { PaginatedEventsModel } from "../../../../datasource/models/Event/PaginatedEventModel";
import type { EventStatusModel } from "../../../../datasource/models/Event/EventStatusModel";
interface EventServiceProps {
    query: string;
    pageIndex: number;
    setEventData: React.Dispatch<React.SetStateAction<PaginatedEventsModel[]>>;
    setEventStatuses:React.Dispatch<React.SetStateAction<EventStatusModel[]>>;
    setIsRefreshing: (isRefreshing: boolean) => void;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  
}
export const EventService = ({
    query,
    pageIndex,
    setEventData,
    setEventStatuses,
    setIsRefreshing,
    setQuery
}:EventServiceProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchEventData = async () => {
        try {
            dispatch(showLoader());
            const res = await EventRepo.getPaginatedEvents(query, pageIndex);
            dispatch(hideLoader());
            if (res.statusCode == 200) {
                setEventData(res.data);
            } else if (res.statusCode == 401) {
                alert("Session has expired. Please login again.");
                navigate("/");
                Cookies.deleteCookie("auth_token");
            }
            else {
                sessionStorage.setItem("message", res.message);
                dispatch(showErrorDialog());
            }

        } catch (e) {
            console.error(e);
        } finally {
            dispatch(hideLoader());
        }
    }
    const fetchEventStatuses = async () => {
        try {
            dispatch(showLoader());
            const res = await EventRepo.getEventStatuses();
            dispatch(hideLoader());
            if (res.statusCode == 200) {
                setEventStatuses(res.data);
            } else if (res.statusCode == 401) {
                alert("Session has expired. Please login again.");
                navigate("/");
                Cookies.deleteCookie("auth_token");
            } else {
                sessionStorage.setItem("message", res.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(hideLoader());
        }
    }

    const handleDeleteEvent = async () => {
        dispatch(showLoader());
        try {
            const response = await EventRepo.deleteEvent(Number(sessionStorage.getItem("id")));
            if (response.statusCode == 200) {
                setTimeout(() => {
                    sessionStorage.setItem("message", response.message);
                    dispatch(showSuccessDialog());
                    dispatch(hideLoader());
                }, 1500);
            }
        } catch (e) {
            alert(e);
            sessionStorage.setItem("message", "Failed to delete event. Please try again.");
            dispatch(hideLoader());
            dispatch(showErrorDialog());
        } finally {
            setIsRefreshing(true);
            sessionStorage.removeItem("id");
        }
    };

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsRefreshing(true);
    }
    return { fetchEventData, fetchEventStatuses, handleDeleteEvent, handleQueryChange };
}
