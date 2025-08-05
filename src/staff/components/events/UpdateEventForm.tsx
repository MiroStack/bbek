import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../redux/dialog/DialogSlice";
import { hideUpdateEvent } from "../../../redux/staff/church_record/EventSlice";
import EventRepo from "../../../repositories/EventRepo";
import { useAppSelector } from "../../../redux/staff/hooks/hooks";
type UpdateEventFormProps = {

    setIsRefreshing: React.Dispatch<React.SetStateAction<boolean>>;
};
export const UpdateEventForm = ({ setIsRefreshing }: UpdateEventFormProps) => {
    const updateEventForm = useAppSelector((state) => state.eventForm.edit);
    const dispatch = useDispatch();
    const [showStatus, setShowStatus] = useState(false);
    const [showEventStatus, setShowEventStatus] = useState(false);
    const [eventType, setEventType] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [attendance, setAttendance] = useState(0);
    const [offering, setOffering] = useState(0);
    const [statusName, setStatusName] = useState("Pending");
    const [description, setDescription] = useState("");
    const [eventName, setEventName] = useState("");
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        getEventData();
    }, [updateEventForm]);
    const getEventData = async () => {
        dispatch(showLoader());
        try {
            const response = await EventRepo.getEvent(parseInt(sessionStorage.getItem("id") || "0"));
            if (response.statusCode === 200) {
                setEventName(response.data.eventName);
                setEventType(response.data.eventType);
                setEventDate(response.data.eventDate);
                setEventTime(response.data.eventTime);
                setEventLocation(response.data.eventLocation);
                setAttendance(response.data.attendance);
                setOffering(response.data.offering);
                setStatusName(response.data.statusName);
                setDescription(response.data.description);
                setFile(null); // Reset file input
                dispatch(hideLoader());
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
                dispatch(hideLoader());
            }
        } catch (e) {
            console.error("Error fetching event data:", e);
            dispatch(hideLoader());
            sessionStorage.setItem("message", "Failed to fetch event data.");
            dispatch(showErrorDialog());
        } finally {

        }
    }

    const handleSetEventName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
    }

    const handleEventLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventLocation(e.target.value);
    }
    const handleEventDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventDate(e.target.value);
    }
    const handleEventTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventTime(e.target.value);
    }
    const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    const handleAttendance = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setAttendance(isNaN(value) ? 0 : value);
    }
    const handleOffering = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setOffering(isNaN(value) ? 0 : value);
    }
    const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        } else {
            setFile(null);
        }
    }
    const handleSetStatus = (newStatus: string) => {
        setStatusName(newStatus);
        setShowStatus(false);
    }
    const handleEventStatus = (newStatus: string) => {
        setEventType(newStatus);
        setShowEventStatus(false);
    }

    const handleShowEventStatus = () => setShowEventStatus(showEventStatus ? false : true);
    const handleShowStatus = () => setShowStatus(showStatus ? false : true);
    async function handleSaveEvent() {
        dispatch(showLoader());
        if (!file) {
            console.error("No file selected");
            alert("Please select an image file to upload.");
            dispatch(hideLoader());
            return;
        }
        try {
            const response = await EventRepo.saveEvent(
                sessionStorage.getItem("id") || "0",
                eventName,
                eventType,
                eventDate,
                eventTime,
                eventLocation,
                attendance.toString(),
                offering.toString(),
                statusName,
                true, // isUpdate
                description,
                file
            );

            if (response.statusCode === 200) {
                dispatch(hideUpdateEvent());
                sessionStorage.setItem("message", response.message);
                console.log("Response:", response.message);
                setEventName("");
                setEventType("");
                setEventDate("");
                setEventTime("");
                setEventLocation("");
                setAttendance(0);
                setOffering(0);
                setStatusName("Pending");
                setDescription("");
                setFile(null);
                // Show success dialog after a short delay 
                setTimeout(() => {
                    dispatch(showSuccessDialog())
                    dispatch(hideLoader())
                }, 1500);
            } else {
                dispatch(hideLoader())
            }

        } catch (err) {
            console.error("Save failed:", err);
        } finally {
            setIsRefreshing(true); // Trigger a refresh of the event data
        }

    }
    return (
        <>
            <div
                role="dialog"
                id="radix-«r4n»"
                aria-describedby="radix-«r4p»"
                aria-labelledby="radix-«r4o»"
                data-state="open"
                className="h-[32rem] overflow-y-auto bg-white fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[500px]"
            >
                <div className="flex flex-col  text-center sm:text-left">
                    <h2 id="radix-«r4o»" className="text-lg font-semibold leading-none tracking-tight">
                        Update Church Event
                    </h2>
                    <p id="radix-«r4p»" className="text-sm text-muted-foreground">
                        Update the details of the church event.</p>
                </div>
                <div className="grid gap-4 py-2">
                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-name"
                        >
                            Event Name
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-name"
                            name="event-name-input"
                            value={eventName}
                            onChange={handleSetEventName}
                            required
                        />
                    </div>
                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-event-type"
                        >
                            Event Type
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleShowEventStatus}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{eventType}</span>
                            <div className={`${showEventStatus ? "" : "hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    <li className="hover:text-green-500" onClick={() => handleEventStatus("Celebration")}>Celebration</li>
                                    <li className="hover:text-green-500" onClick={() => handleEventStatus("Sacraments")}>Sacraments</li>
                                    <li className="hover:text-green-500" onClick={() => handleEventStatus("Worship")}>Worship</li>
                                    <li className="hover:text-green-500" onClick={() => handleEventStatus("Activity")}>Activity</li>
                                    <li className="hover:text-green-500" onClick={() => handleEventStatus("Others")}>Others</li>
                                </ul>
                            </div>
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
                                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-date"
                        >
                            Event Date
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-date"
                            type="date"
                            value={eventDate}
                            onChange={handleEventDate}
                            name="event-date-input"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-time"
                        >
                            Event Time
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="time"
                            type="time"
                            value={eventTime}
                            onChange={handleEventTime}
                            required
                            name="event-time-input"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-location"
                        >
                            Event Location
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="location"
                            type="text"
                            value={eventLocation}
                            onChange={handleEventLocation}
                            required
                            name="event-time-input"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-attendace"
                        >
                            Attendance
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="attendance"
                            type="number"
                            value={attendance}
                            onChange={handleAttendance}
                            required
                            name="event-attendance-input"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-attendace"
                        >
                            Offering
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="offering"
                            type="number"
                            value={offering}
                            onChange={handleOffering}
                            required
                            name="event-offering-input"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="event-image"
                        >
                            Select Image
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input  cursor-pointer bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="event-image"
                            type="file"
                            name="event-leader-input"
                            onChange={handleSetFile}
                            accept="image/*"
                            required
                        />
                    </div>
                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-status"
                        >
                            Status
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleShowStatus}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{statusName}</span>
                            <div className={`${showStatus ? "" : "hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Ongoing")}>Ongoing</li>
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Tentative")}>Tentative</li>
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Upcoming")}>Upcoming</li>
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Completed")}>Completed</li>
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Cancelled")}>Cancelled</li>
                                </ul>
                            </div>
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
                                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-description"
                        >
                            Description
                        </label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-description"
                            name="event-description-input"
                            value={description}
                            onChange={handleSetDescription}
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2"
                        type="button"
                        name="create-event-confirm-btn"
                        onClick={handleSaveEvent}
                    >
                        Update Event
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => { dispatch(hideUpdateEvent()) }}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
                        className="lucide lucide-x h-4 w-4"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </>
    );
}