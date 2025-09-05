import { useState } from "react";
import { hideMinistry } from '../../../../datasource/redux/staff/church_record/MinistrySlice';
import { useDispatch } from 'react-redux';
import MinistryRepo from "../../../../datasource/repositories/MinistryRepo";
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../../datasource/redux/dialog/DialogSlice";

interface MinistryProps{
    setIsRefresh:React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateMinistryForm = ({setIsRefresh}:MinistryProps) => {
    const dispatch = useDispatch();
    const [showStatus, setShowStatus] = useState(false);
    const [ministryName, setMinistryName] = useState("");
    const [schedule, setSchedule] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [leader, setLeader] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [member, setMember] = useState(0);
    const [file, setFile] = useState<File | null>(null);

    const handleSetMinistryName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinistryName(e.target.value);
    }
    const handleSetSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSchedule(e.target.value);
    }
    const handleSetStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartTime(e.target.value);
    }
    const handleSetEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndTime(e.target.value);
    }
    const handleSetLeader = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLeader(e.target.value);
    }
    const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    const handleSetMember = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMember(isNaN(value) ? 0 : value);
    }
    const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        } else {
            setFile(null);
        }
    }
    const handleSetStatus = (newStatus: string) => {
        setStatus(newStatus);
        setShowStatus(false);
    }


    const handleShowStatus = () => setShowStatus(showStatus ? false : true);
    async function handleSaveMinistry() {
        dispatch(showLoader());
        if (!file) {
            alert("Please select an image file to upload.");
            dispatch(hideLoader());
            return;
        }

        try {
            const response = await MinistryRepo.saveMinistry(
                0,
                member,
                description,
                ministryName,
                status,
                leader,
                schedule,
                startTime,
                endTime,
                file,
                false
            );

            if (response.statusCode === 201) {
                dispatch(hideMinistry());
                sessionStorage.setItem("message", response.message);
                console.log("Response:", response.message);
                setMinistryName("");
                setSchedule("");
                setStartTime("");
                setEndTime("");
                setLeader("");
                setDescription("");
                setStatus("Pending");
                setMember(0);
                setFile(null);
                // Show success dialog after a short delay 
                setTimeout(() => {
                    dispatch(showSuccessDialog())
                    dispatch(hideLoader())
                }, 1500);
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog())
                dispatch(hideLoader())
            }

        } catch (err) {
            console.error("Save failed:", err);
        } finally {
          setIsRefresh(true);
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
                        Create New Ministry
                    </h2>
                    <p id="radix-«r4p»" className="text-sm text-muted-foreground">
                        Add a new ministry to the church.
                    </p>
                </div>
                <div className="grid gap-4 py-2">
                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-name"
                        >
                            Ministry Name
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-name"
                            name="ministry-name-input"
                            value={ministryName}
                            onChange={handleSetMinistryName}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-schedule"
                        >
                            Schedule
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-schedule"
                            value={schedule}
                            onChange={handleSetSchedule}
                            name="ministry-schedule-input"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-schedule"
                        >
                            Start Time
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-schedule"
                            type="time"
                            value={startTime}
                            onChange={handleSetStartTime}
                            name="ministry-schedule-input"
                            required
                        />
                    </div>
                      <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-schedule"
                        >
                            End Time
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-schedule"
                            value={endTime}
                            type="time"
                            onChange={handleSetEndTime}
                            name="ministry-schedule-input"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-leader"
                        >
                            Ministry Leader
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-leader"
                            value={leader}
                            onChange={handleSetLeader}
                            name="ministry-leader-input"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-leader"
                        >
                            Member Population
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="member"
                            type="number"
                            value={member}
                            onChange={handleSetMember}
                            min="0"
                            required
                            name="ministry-member-input"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="ministry-image"
                        >
                            Select Image
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input  cursor-pointer bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="ministry-image"
                            type="file"
                            name="ministry-leader-input"
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
                            <span className="">{status}</span>
                            <div className={`${showStatus ? "" : "hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Active")}>Active</li>
                                    <li className="hover:text-green-500" onClick={() => handleSetStatus("Pending")}>Pending</li>
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
                            name="ministry-description-input"
                            value={description}
                            onChange={handleSetDescription}
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2"
                        type="button"
                        name="create-ministry-confirm-btn"
                        onClick={handleSaveMinistry}
                    >
                        Create Ministry
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(hideMinistry())}
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