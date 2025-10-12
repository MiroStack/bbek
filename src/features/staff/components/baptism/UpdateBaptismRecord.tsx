import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import type { BaptismResponseModel } from "../../../../datasource/models/baptism/BaptismResponseModel";
import { hideUpdateBaptism } from "../../../../datasource/redux/staff/service/BaptismSlice";
import BaptismRepo from "../../../../datasource/repositories/BaptismRepo";
import type { UserAndIdModel } from "../../../../datasource/models/User/UserAndIdModel";
import type { BaptismStatusModel } from "../../../../datasource/models/baptism/BaptismStatusModel";
import type { CertificateStatusModel } from "../../../../datasource/models/baptism/CertificateStatusModel";
import type { BaptismScheduleModel } from "../../../../datasource/models/baptism/BaptismScheduleModel";
import dayjs from "dayjs";
import { useAppSelector } from "../../../../datasource/redux/staff/hooks/hooks";
interface UpdateBaptismRecordProps{
    setIsRefresh:React.Dispatch<React.SetStateAction<boolean>>;
}
export const UpdateBaptismRecord = ({setIsRefresh}:UpdateBaptismRecordProps) => {
    const dispatch = useDispatch();
    const baptismModel = useAppSelector((state)=>state.baptism.model);
    const [dataModel, setDataModel] = useState<BaptismResponseModel | null>(baptismModel ?? null);
    const [toggleBaptismStatus, setToggleBaptismStatus] = useState<boolean>(false);
    const [toggleCertificateStatus, setToggleCertificateStatus] = useState<boolean>(false);
    const [toggleOfficiantDropDown, setToggleOfficiantDropdown] = useState<boolean>(false);
    const [baptismStatus, setBaptismStatus] = useState(baptismModel?.status??"IN-PROGRESS");
    const [certificateStatus, setCertificateStatus] = useState(baptismModel?.certificateStatus??"PENDING");
    const [baptismDate, setBaptismDate] = useState(baptismModel?.baptismDate??"");
    const [officiant, setOfficiant] = useState(baptismModel?.baptismOfficiant??"");
    const [location, setLocation] = useState(baptismModel?.location??"");
    const [officiantList, setOfficiantList] = useState<UserAndIdModel[]>([]);
    const [statusList, setStatusList] = useState<BaptismStatusModel[]>([]);
    const [certificateStatusList, setCertificateStatusList] = useState<CertificateStatusModel[]>([]);
    const handleCertificateDropdown = () => {
        setToggleCertificateStatus(!toggleCertificateStatus);
    }
    const handleBaptismDropDown = () => {
        setToggleBaptismStatus(!toggleBaptismStatus);
    }

    const handleOfficiantDropdown = () => {
        setToggleOfficiantDropdown(!toggleOfficiantDropDown);
    }

    const handleBaptismDate = (e: React.ChangeEvent<HTMLInputElement>) => {
         const date1 = new Date(e.target.value);
        const date = new Date();
        if (date == date1 || date1 < date) {
            alert("Invalid Dates.");
            setBaptismDate("");
            return;
        }
        setBaptismDate(e.target.value);
    }
    const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    }
    const fetchOfficiant = async () => {
        try {
            dispatch(showLoader());
            const response = await BaptismRepo.getOfficiants();
            dispatch(hideLoader());
            if (response.statusCode == 200) {
                setOfficiantList(response.data);
                
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {

        } finally {

        }
    }

    const fetchBaptismStatuses = async () => {
        try {
            dispatch(showLoader());
            const response = await BaptismRepo.getBaptismStatuses();
            dispatch(hideLoader());
            if (response.statusCode == 200) {
                setStatusList(response.data);
                
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {

        } finally {

        }
    }

    const fetchCertificateStatuses = async () => {
        try {
            dispatch(showLoader());
            const response = await BaptismRepo.getCertificateStatuses();
            dispatch(hideLoader());
            if (response.statusCode == 200) {
                setCertificateStatusList(response.data);
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {

        } finally {

        }
    }

    const handleSubmit = async () => {
       console.log(dataModel);
        if (!dataModel) {
            // handle the case where dataModel is null, e.g. show an error or return early
            dispatch(showErrorDialog());
            return;
        }

        const model: BaptismScheduleModel = {
            id: dataModel.id,
            certificationId: certificateStatusList.find((item) => item.statusName == certificateStatus)?.id ?? 0,
            baptismStatusId: statusList.find((item) => item.statusName == baptismStatus)?.id ?? 0,
            baptismDate: baptismDate,
            location: location,
            baptismOfficiantId: officiantList.find((item) => item.fullName == officiant)?.id ?? 0,
            baptismOfficiant: officiant,
            dateString: dayjs(baptismDate).format("MMMM D, YYYY h:mm A"),
            email: dataModel.userInfoModel.email
        }

        try {
            dispatch(showLoader());
            const response = await BaptismRepo.scheduleBaptism(model);
            dispatch(hideLoader());
            if(response.statusCode == 200){
                sessionStorage.setItem("message", response.message);
                setIsRefresh(true);
                dispatch(showSuccessDialog());
                dispatch(hideUpdateBaptism());
            }else{
                 sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {
            
        } finally {
           
        }
    }

    useEffect(() => {
        fetchOfficiant();
        fetchBaptismStatuses();
        fetchCertificateStatuses();
    }, []);

    useEffect(() => {
        // const date1 = new Date(baptismDate);
        // const date = new Date();
        // if (date == date1 || date1 < date) {
        //     alert("Invalid Dates.");
        //     setBaptismDate("");
        //     return;
        // }
    }, [baptismDate]);


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
                        Edit Baptism Record
                    </h2>
                    <p id="radix-«r4p»" className="text-sm text-muted-foreground">
                        Make changes to the baptism record.
                    </p>
                </div>

                <div className="grid gap-4 py-2">
                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-status"
                        >
                            Baptism Status
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleBaptismDropDown}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{baptismStatus}</span>
                            <div className={`${toggleBaptismStatus ? "" : "hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {statusList.map((status) =>
                                        <li key={status.id} className="hover:text-green-500" onClick={() => { setBaptismStatus(status.statusName); handleBaptismDropDown(); }}>
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

                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="baptism-date"
                        >
                            Baptism Date
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-name"
                            name="baptism-date-input"
                            value={baptismDate}
                            type="dateTime-local"
                            onChange={handleBaptismDate}
                            required
                        />
                    </div>
                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="officiant"
                        >
                            Baptism Officiant
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleOfficiantDropdown}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{officiant}</span>
                            <div className={`${toggleOfficiantDropDown ? "" : "hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {officiantList.map((officiant) =>
                                        <li key={officiant.id} className="hover:text-green-500" onClick={() => {
                                            setOfficiant(officiant.fullName);
                                            handleOfficiantDropdown();
                                        }}>
                                            {officiant.fullName}
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

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="location"
                        >
                            Location
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="location"
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleLocation}
                            required
                        />
                    </div>
                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="certificate"
                        >
                            Certificate
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleCertificateDropdown}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{certificateStatus}</span>
                            <div className={`${toggleCertificateStatus ? "" : "hidden"} absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-10`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {certificateStatusList.map((status) =>
                                        <li key={status.id} className="hover:text-green-500" onClick={() => {
                                            setCertificateStatus(status.statusName);
                                            handleCertificateDropdown();
                                        }}>
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
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2"
                        type="button"
                       onClick={handleSubmit}
                        name="create-marriage-confirm-btn"
                    >
                        Update Record
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(hideUpdateBaptism())}
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