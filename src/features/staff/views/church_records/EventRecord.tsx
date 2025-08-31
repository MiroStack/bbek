import { useEffect, useState } from "react"
import type { EventModel } from "../../../../datasource/models/EventModel";
import EventRepo from "../../../../datasource/repositories/EventRepo";
import { useDispatch } from "react-redux";
import { showCreateEvent, showUpdateEvent } from "../../../../datasource/redux/staff/church_record/EventSlice";
import { useAppSelector } from "../../../../datasource/redux/staff/hooks/hooks";
import { CreateEventForm } from "../../components/events/CreateEventForm";
import { Loader } from "../../../landpage/components/Loader";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { WarningDialog } from "../../../../component/dialog/WarningDialog";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";
import {  hideLoader, showErrorDialog, showLoader, showSuccessDialog, showWarningDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { UpdateEventForm } from "../../components/events/UpdateEventForm";
import dayjs from "dayjs";
export const EventRecordPage = () => {
    const eventCreateForm = useAppSelector((state) => state.eventForm.value);
    const eventEditForm = useAppSelector((state) => state.eventForm.edit);
    const loaderDialog = useAppSelector((state) => state.dialog.loader);
    const errorDialog = useAppSelector((state) => state.dialog.error);
    const successDialog = useAppSelector((state) => state.dialog.success);
    const warningDialog = useAppSelector((state) => state.dialog.warning);

    const dispatch = useDispatch();
    const [eventData, setEventDate] = useState<EventModel[]>([])
    const [isRefreshing, setIsRefreshing] = useState(true);

    useEffect(() => {
        if (isRefreshing) {
            fetchEventData();
            setIsRefreshing(false);
        }
    }, [isRefreshing]);
    const fetchEventData = async () => {
        try {
            const res = await EventRepo.getAllEvent();
            setEventDate(res);
        } catch (e) {
            console.error(e);
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
    return (
        <>
            <div className={`${eventCreateForm ? "" : "hidden"}`}>
                <CreateEventForm setIsRefreshing={setIsRefreshing} />
            </div>
            <div className={`${eventEditForm ? "" : "hidden"}`}>
                <UpdateEventForm setIsRefreshing={setIsRefreshing} />
            </div>
            <div className=''>
                <Loader loader={loaderDialog} />
            </div>
            <div className={`${errorDialog ? "" : "hidden"}`}>
                <ErrorDialog2 />
            </div>
            <div className={`${successDialog ? "" : "hidden"}`}>
                <SuccessDialog />
            </div>
            <div className={`${warningDialog ? "" : "hidden"}`}>
                <WarningDialog onConfirm={handleDeleteEvent} />
            </div>


            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Church Events</h1>
                        <a
                            className="!bg-green-600 text-white hover:!bg-green-500  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            onClick={() => { dispatch(showCreateEvent()) }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-calendar h-4 w-4 mr-2"
                            >
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                            Create New Event
                        </a>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-4 justify-between">
                                <div className="relative w-full md:w-1/3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                                        placeholder="Search events..."
                                        type="text"
                                        id="search-events"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                        type="button"
                                        id="radix-«r8l»"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-state="closed"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-filter h-4 w-4 mr-2"
                                        >
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                        </svg>
                                        Filter by Status
                                    </button>
                                    <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                        name="export-events-csv-btn"
                                    >
                                        Export CSV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&amp;_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Event Title
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Start Date
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            End Date
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            Location
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden lg:table-cell">
                                            Type
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Status
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&amp;_tr:last-child]:border-0">
                                    {
                                        eventData.map((item, index) => (
                                            <tr key={index} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                                                    {item.eventName}
                                                </td>
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{dayjs(item.eventStartDate).format("MMMM D, YYYY h:mm A")}</td>
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                    {dayjs(item.eventEndDate).format("MMMM D, YYYY h:mm A")}
                                                </td>
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                    {item.eventLocation}
                                                </td>
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden lg:table-cell">
                                                    {item.eventType}
                                                </td>
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                    <div
                                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-100 text-blue-800"
                                                    >
                                                        {item.statusName}
                                                    </div>
                                                </td>
                                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                                    <div className='flex items-center justify-end gap-2'>
                                                        <FaEdit className='text-green-700 hover:cursor-pointer text-lg' onClick={
                                                            () => {
                                                                sessionStorage.setItem("id", item.id.toString());
                                                                dispatch(showUpdateEvent());

                                                            }} />
                                                        <FaRegTrashAlt className='text-red-700 hover:cursor-pointer text-lg' onClick={() => {
                                                            sessionStorage.setItem("id", item.id.toString());
                                                            dispatch(showWarningDialog());

                                                        }} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}