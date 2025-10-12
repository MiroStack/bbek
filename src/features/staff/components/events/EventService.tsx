
import { hideLoader, showErrorDialog, showLoader, showRelogin, showSuccessDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import { useDispatch } from "react-redux";
import EventRepo from "../../../../datasource/repositories/EventRepo";
import { useNavigate } from "react-router-dom";
import type React from "react";
import { Cookies } from "../../../../util/Cookies";
import type { PaginatedEventsModel } from "../../../../datasource/models/Event/PaginatedEventModel";
import type { EventStatusModel } from "../../../../datasource/models/Event/EventStatusModel";
import { useEffect, useLayoutEffect } from "react";
interface EventServiceProps {
    query: string;
    pageNumber: number;
    totalPage: number;
    eventData: PaginatedEventsModel[];
    selectedStatus: string;
    setTotalPage: React.Dispatch<React.SetStateAction<number>>;
    setPages: React.Dispatch<React.SetStateAction<number[]>>;
    setEventData: React.Dispatch<React.SetStateAction<PaginatedEventsModel[]>>;
    setEventStatuses: React.Dispatch<React.SetStateAction<EventStatusModel[]>>;
    setIsRefreshing: (isRefreshing: boolean) => void;
    setQuery: React.Dispatch<React.SetStateAction<string>>;

}
export const EventService = ({
    query,
    pageNumber,
    totalPage,
    eventData,
    selectedStatus,
    setTotalPage,
    setPages,
    setEventData,
    setEventStatuses,
    setIsRefreshing,
    setQuery
}: EventServiceProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Whenever pageNumber or totalPage changes, update visible pages
    useEffect(() => {
        setTotalPage(Math.ceil((eventData[0]?.totalRows ?? 0) / 11));
    }, [eventData]);
    useEffect(() => {
        const maxVisible = 5; // how many page buttons you want to show
        let start = Math.max(1, pageNumber - Math.floor(maxVisible / 10));
        let end = start + maxVisible - 1;

        if (end > totalPage) {
            end = totalPage;
            start = Math.max(1, end - maxVisible + 1);
        }

        const newPages = [];
        for (let i = start; i <= end; i++) {
            newPages.push(i);
        }
        setPages(newPages);
        console.log(pageNumber);
    }, [pageNumber, totalPage]);

    const fetchEventData = async () => {
        try {
            dispatch(showLoader());
            const res = await EventRepo.getPaginatedEvents(query,  pageNumber, selectedStatus);
            dispatch(hideLoader());
            if (res.status == 200 && res.data.statusCode == 200) {
                setEventData(res.data.data);
            }
            else if (res.status == 401) {
              
                dispatch(showRelogin());
            } 
            else {
                sessionStorage.setItem("message", res.data.message);
               // dispatch(showErrorDialog());
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
            if (res.status == 200 && res.data.statusCode == 200) {
                setEventStatuses(res.data.data);
            } else if (res.status == 401) {
                 dispatch(showRelogin());
            } else {
                sessionStorage.setItem("message", res.data.message);
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
