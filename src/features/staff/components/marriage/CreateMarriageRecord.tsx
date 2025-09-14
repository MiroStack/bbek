import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { MarriageStatusesModel } from "../../../../datasource/models/Marriage/MarriageStatusesModel";
import type { MarriageLocationsModel } from "../../../../datasource/models/Marriage/MarriageLocationsModel";
import { hideCreateMarriage } from "../../../../datasource/redux/staff/church_record/MarriageSlice";
interface CreateMarriageRecordProps {
    marriageStatuses: MarriageStatusesModel[];
    marriageLocations: MarriageLocationsModel[];
}
export const CreateMarriageRecord = ({ marriageStatuses, marriageLocations }: CreateMarriageRecordProps) => {
    const dispatch = useDispatch();
    const [groomName, setGroomName] = useState("");
    const [brideName, setBrideName] = useState("");
    const [weddingDate, setWeddingDate] = useState("");
    const [location, setLocation] = useState<MarriageLocationsModel>();
    const [locationList, setLocationList] = useState<MarriageLocationsModel[]>([]);
    const [status, setStatus] = useState<MarriageStatusesModel>();
    const [statusList, setStatusList] = useState<MarriageStatusesModel[]>([]);
    const [email, setEmail] = useState("");
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const toggleStatusDropdown = () => {
        setShowStatusDropdown(!showStatusDropdown);
    }
    const toggleLocationDropdown = () => {
        setShowLocationDropdown(!showLocationDropdown);
    }
    const handleBrideNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrideName(e.target.value);
    }
    const handleGroomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroomName(e.target.value);
    }
    const handleWeddingDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeddingDate(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

     useEffect(() => {
        console.log(marriageLocations)
        setStatusList(marriageStatuses);
        setLocationList(marriageLocations);
        setStatus(marriageStatuses[0]);
        setLocation(marriageLocations[0]);
    },[]);


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
                <div className="flex flex-col items-start gap-2  text-center sm:text-left">
                    <h2 id="radix-«r4o»" className="text-lg font-semibold leading-none tracking-tight">
                        Add New Marriage Record
                    </h2>
                    <p id="radix-«r4p»" className="text-sm text-muted-foreground">
                        Create a new marriage record.
                    </p>
                </div>
                <div className="grid gap-4 py-2">
                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="groom-name"
                        >
                            Groom Name
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-name"
                            name="groom-name-input"
                            onChange={handleGroomNameChange}
                            required
                        />
                    </div>
                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="groom-name"
                        >
                            Bride Name
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="bridename"
                            name="brid-name-input"
                            onChange={handleBrideNameChange}
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="wedding-date"
                        >
                            Wedding Date
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="wedding-date"
                            type="dateTime-local"
                            name="event-date-input"
                            onChange={handleWeddingDateChange}
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
                            onClick={toggleStatusDropdown}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{status?.statusName}</span>
                            <div className={`${showStatusDropdown?"":"hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {statusList.map((status) =>
                                        <li key={status.id} className="hover:text-green-500" onClick={() => { setStatus(status); setShowStatusDropdown(false); }}>
                                            {status.statusName}
                                        </li>
                                    )}
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

                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-location"
                        >
                            Location
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={toggleLocationDropdown}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{location?.locationName}</span>
                            <div className={`${showLocationDropdown?"":"hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {locationList.map((location) =>
                                        <li key={location.id} className="hover:text-green-500" onClick={()=>{setLocation(location); setShowLocationDropdown(false);}}>
                                            {location.locationName}
                                        </li>
                                    )}

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



                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="contact-email"
                        >
                            Contact Email
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="contactEmail"
                            name="contact-email-input"
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2"
                        type="button"
                        name="create-marriage-confirm-btn"

                    >
                        Create Marriage
                    </button>
                </div>
                <button
                    type="button"
                    onClick={()=>dispatch(hideCreateMarriage())}
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