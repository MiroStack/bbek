import { useCallback, useEffect, useReducer, useState } from "react";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { showCreateOffering, showUpdateOffering } from "../../../../datasource/redux/staff/church_record/OfferingSlice";
import { useAppSelector } from "../../../../datasource/redux/staff/hooks/hooks"
import { Loader } from "../../../landpage/components/Loader";
import { CreateOffering } from "../../components/offering/CreateOffering";
import { useDispatch } from "react-redux";
import OfferingRepo from "../../../../datasource/repositories/OfferingRepo";
import { hideLoader, showErrorDialog, showLoader, showWarningDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import type { OfferingModel } from "../../../../datasource/models/Offering/OfferingModel";
import dayjs from "dayjs";
import { WarningDialog } from "../../../../component/dialog/WarningDialog";
import { UpdateOffering } from "../../components/offering/UpdateOffering";

export const OfferingTypes = {
    all: "ALL",
    offering: "OFFERING",
    tithe: "TITHE",
    special_offering: "SPECIAL OFFERING"
}
interface ActionModel {
    type: string;
    payload: OfferingModel[];
}
interface DonationModel {
    all: number;
    tithe: number;
    offering: number;
    special_offering: number;
}

const reducer = (state: OfferingModel[], action: ActionModel) => {
    //    console.log("I am working "+action.payload);
    switch (action.type) {
        case OfferingTypes.all:
            return action.payload;
        case OfferingTypes.offering:
            //    console.log("offering");
            return action.payload.filter((item, index) => item.offeringType == OfferingTypes.offering);
        case OfferingTypes.tithe:
            //    console.log("tithe");
            return action.payload.filter((item, index) => item.offeringType == OfferingTypes.tithe);
        case OfferingTypes.special_offering:
            return action.payload.filter((item, index) => item.offeringType == OfferingTypes.special_offering);
        default:
            //    console.log("all");
            return state;
    }
}


export const TithesOfferingPage = () => {

    const offeringForm = useAppSelector((state => state.offeringForm.value));
    const loaderDialog = useAppSelector((state => state.dialog.loader));
    const errorDialog = useAppSelector((state => state.dialog.error));
    const successDialog = useAppSelector((state => state.dialog.success));
    const warningDialog = useAppSelector((state => state.dialog.warning));
    const updateOfferingForm = useAppSelector((state => state.offeringForm.edit));
    const [isRefreshing, setIsRefreshing] = useState<boolean>(true);
    const [allOffering, setAllOffering] = useState<OfferingModel[]>([]);
    const [optionIndex, setOptionIndex] = useState<number>(-1);
    const [selectedItem, setSelectedItem] = useState<OfferingModel | null>(null);
    const [showSorting, setShowSorting] = useState<boolean>(false);
    const [donation, setDonation] = useState<DonationModel>();
    const [state, dispatch1] = useReducer(reducer, allOffering);
    useEffect(() => {
        if (isRefreshing) {
            handleGetAllOffering();
            setIsRefreshing(false);
        }
    }, [isRefreshing]);

    useEffect(() => {
        if (allOffering.length > 0) {
            dispatch1({ type: OfferingTypes.all, payload: allOffering });
            calculate();
        }
      
    }, [allOffering]);

   const calculate = useCallback(()=>{
          let allDonation = 0;
        let offeringDonation = 0;
        let titheDonation = 0;
        let specialDonation = 0;
        allOffering.forEach((item) => {
            allDonation += item.amount;
            switch (item.offeringType) {
                case OfferingTypes.offering:
                    offeringDonation += item.amount;
                    break;
                case OfferingTypes.tithe:
                    titheDonation += item.amount;
                    break;
                case OfferingTypes.special_offering:
                    specialDonation += item.amount;
                    break;
            }
        })

        setDonation({
            all: allDonation,
            offering: offeringDonation,
            tithe: titheDonation,
            special_offering: specialDonation
        })
    },[allOffering])

    const handleGetAllOffering = async () => {
        dispatch(showLoader());
        try {
            const response = await OfferingRepo.getAllOffering();
            if (response.statusCode == 200) {
                setAllOffering(response.data);
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {
            console.log(`An error occurred: ${e}`);
        } finally {
            dispatch(hideLoader());
        }
    }


    const handleDeleteOffering = async () => {
        dispatch(showLoader());
        try {
            const id = parseInt(sessionStorage.getItem("id") ?? '0');
            const response = await OfferingRepo.deleteOffering(id);
            if (response.statusCode == 200) {
                setIsRefreshing(true);
            } else if (response.statusCode === 401) {
                sessionStorage.setItem("message", "Session expired. Kindly relogin your account.");
                dispatch(showErrorDialog());
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {

        } finally {
            sessionStorage.removeItem("id");
        }
    }

    const handleShowSorting = () => {
        setShowSorting(!showSorting);
    }


    const dispatch = useDispatch();
    return (
        <>
            <div className={`${offeringForm ? '' : 'hidden'}`}>
                <CreateOffering setIsRefreshing={setIsRefreshing} />
            </div>
            {updateOfferingForm && (
                <div>
                    <UpdateOffering setIsRefreshing={setIsRefreshing} offeringModel={selectedItem!} />
                </div>
            )}
            <div className={`${loaderDialog ? '' : 'hidden'}`}>
                <Loader loader={loaderDialog} />
            </div>
            <div className={`${successDialog ? '' : 'hidden'}`}>
                <SuccessDialog />
            </div>
            <div className={`${warningDialog}? '':'hidden' `}>
                <WarningDialog onConfirm={handleDeleteOffering} />
            </div>
            <div className={`${errorDialog ? '' : 'hidden'}`}>
                <ErrorDialog2 />
            </div>
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Tithes &amp; Offerings</h1>
                        <button
                            className="!bg-green-600 text-white hover:!bg-green-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            type="button"
                            onClick={() => dispatch(showCreateOffering())}
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
                                className="lucide lucide-plus h-4 w-4 mr-2"
                            >
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                            Record New Donation
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Total Donations</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">₱{donation?.all}</h3>
                                    </div>
                                    <div className="p-3 bg-green-100 rounded-full">
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
                                            className="lucide lucide-gift h-6 w-6 text-green-700"
                                        >
                                            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                            <path d="M12 8v13"></path>
                                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Tithes</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">₱{donation?.tithe}</h3>
                                    </div>
                                    <div className="p-3 bg-blue-100 rounded-full">
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
                                            className="lucide lucide-gift h-6 w-6 text-blue-700"
                                        >
                                            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                            <path d="M12 8v13"></path>
                                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Offerings</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">₱{donation?.offering}</h3>
                                    </div>
                                    <div className="p-3 bg-purple-100 rounded-full">
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
                                            className="lucide lucide-gift h-6 w-6 text-purple-700"
                                        >
                                            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                            <path d="M12 8v13"></path>
                                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Special Offerings</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">₱{donation?.special_offering}</h3>
                                    </div>
                                    <div className="p-3 bg-yellow-100 rounded-full">
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
                                            className="lucide lucide-gift h-6 w-6 text-yellow-700"
                                        >
                                            <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                            <path d="M12 8v13"></path>
                                            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <div className="flex gap-2 relative">
                                    <div className={`${showSorting ? "" : "hidden"} absolute bg-white z-10 h-28 w-48 rounded-md shadow-md bottom-[-250%] left-[-10%] flex flex-col items-center justify-center`}>
                                        <ul className="h-full w-full flex flex-col items-center justify-center" onClick={() => setShowSorting(false)}>
                                            <li className="hover:bg-green-100 cursor-pointer w-full px-3" onClick={() => dispatch1({ type: OfferingTypes.all, payload: allOffering })}>All</li>
                                            <li className="hover:bg-green-100 cursor-pointer w-full px-3" onClick={() => dispatch1({ type: OfferingTypes.offering, payload: allOffering })}>Offering</li>
                                            <li className="hover:bg-green-100 cursor-pointer w-full px-3" onClick={() => dispatch1({ type: OfferingTypes.tithe, payload: allOffering })}>Tithe</li>
                                            <li className="hover:bg-green-100 cursor-pointer w-full px-3" onClick={() => dispatch1({ type: OfferingTypes.special_offering, payload: allOffering })}>Special Offering</li>
                                        </ul>
                                    </div>
                                    <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                        type="button"
                                        onClick={handleShowSorting}
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
                                        Filter by Type
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
                    <div dir="ltr" data-orientation="horizontal">
                        <div
                            data-state="active"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-«r9a»-trigger-all"
                            id="radix-«r9a»-content-all"
                            tabIndex={0}
                            className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
                            style={{ animationDuration: '0s' }}
                        >
                            <div className="rounded-md border">
                                <div className="relative w-full overflow-auto">
                                    <table className="w-full caption-bottom text-sm">
                                        <thead className="[&amp;_tr]:border-b">
                                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                    Member Name
                                                </th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                    Amount
                                                </th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                    Date
                                                </th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                    Type
                                                </th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                    Payment Method
                                                </th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                    Notes
                                                </th>
                                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&amp;_tr:last-child]:border-0">
                                            {
                                                state.map((item, index) => (
                                                    <tr key={index} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{item.memberName}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">₱{item.amount}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{dayjs(item.offeringDate).format("MMMM D, YYYY h:mm A")}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">{item.offeringType}</span>
                                                        </td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{item.paymentMethod}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                            {item.notes}
                                                        </td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right relative">
                                                            <div className={`${optionIndex === index ? "" : "hidden"} absolute bg-white z-10 h-28 w-36 left-[-100%] bottom-[-80%] shadow-md rounded-md`} onClick={() => setOptionIndex(-1)}>
                                                                <ul className="flex flex-col items-start w-full">
                                                                    <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start">View Details</li>
                                                                    <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start" onClick={() => {
                                                                        setSelectedItem(item);
                                                                        dispatch(showUpdateOffering())
                                                                    }}>Edit Donation</li>
                                                                    <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start">Print Receipt</li>
                                                                    <li className="text-red-500 cursor-pointer hover:bg-gray-100 p-1 w-full text-start" onClick={() => {
                                                                        sessionStorage.setItem("id", item.id);
                                                                        dispatch(showWarningDialog());
                                                                    }}>Delete</li>
                                                                </ul>
                                                            </div>
                                                            <button
                                                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                                                type="button"
                                                                onClick={() => { setOptionIndex(index) }}
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
                                                                    className="lucide lucide-ellipsis h-4 w-4"
                                                                >
                                                                    <circle cx="12" cy="12" r="1"></circle>
                                                                    <circle cx="19" cy="12" r="1"></circle>
                                                                    <circle cx="5" cy="12" r="1"></circle>
                                                                </svg>
                                                                <span className="sr-only">Actions</span>
                                                            </button>
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
                </div>
            </div>
        </>
    )
}