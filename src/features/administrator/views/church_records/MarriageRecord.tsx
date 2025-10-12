import { useEffect, useLayoutEffect, useState } from "react";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { WarningDialog } from "../../../../component/dialog/WarningDialog";
import type { MarriageStatusesModel } from "../../../../datasource/models/Marriage/MarriageStatusesModel";
import { useAppDispatch, useAppSelector } from "../../../../datasource/redux/modules/hooks/hooks";
import { Loader } from "../../../landpage/components/Loader";
import type { MarriageLocationsModel } from "../../../../datasource/models/Marriage/MarriageLocationsModel";
import type { MarriageModel } from "../../../../datasource/models/Marriage/MarriageModel";
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog, showWarningDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import dayjs from "dayjs";
import { showCreateMarriage, showUpdateMarriage } from "../../../../datasource/redux/modules/church_record/MarriageSlice";
import { NoDataPage } from "../../../landpage/components/NoDataPage";
import { MarriageService } from "../../../../component/components/marriage/MarriageService";
import { CreateMarriageRecord } from "../../../../component/components/marriage/CreateMarriageRecord";
import { UpdateMarriageRecord } from "../../../../component/components/marriage/UpdateMarriageRecord";
import { Pagination } from "../../../../component/components/pagination/Pagination";
import { ReloginDialog } from "../../../../component/dialog/ReloginDialog";


export const MarriageRecordPageAdmin = () => {
    const dispatch = useAppDispatch();
    const reloginDialog = useAppSelector((state) => state.dialog.relogin);
    const [refresh, setRefresh] = useState<boolean>(true);
    const showMarriageForm = useAppSelector((state) => state.marriageForm.value);
    const displayUpdateMarriage = useAppSelector((state) => state.marriageForm.edit);
    const successDialog = useAppSelector((state) => state.dialog.success);
    const errorDialog = useAppSelector((state) => state.dialog.error);
    const warningDialog = useAppSelector((state) => state.dialog.warning);
    const loaderDialog = useAppSelector((state) => state.dialog.loader);
    const [optionIndex, setOptionIndex] = useState<number>(-1);
    const [statusRef, setStatusRef] = useState<MarriageStatusesModel[]>([]);
    const [locationRef, setLocationRef] = useState<MarriageLocationsModel[]>([]);
    const [marriageRecords, setMarriageRecords] = useState<MarriageModel[]>([]);
    const [selectedItem, setSelectedItem] = useState<MarriageModel | null>(null);
    const [query, setQuery] = useState<string>("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [totalPage, setTotalPage] = useState(1);
    const marriageService = MarriageService({
        marriageRecords,
        pageNumber,
        totalPage,
        query,
        setStatusRef,
        setTotalPage,
        setPages,
        setLocationRef,
        setMarriageRecords,
        setQuery,
        setRefresh
    });
    useLayoutEffect(() => {
        if (refresh) {
            marriageService.fetchStatusesRef();
            marriageService.fetchLocationRef();
            marriageService.fetchMarriageRecords();
            setRefresh(false);
        }
    }, [refresh])

    return (

        <>
            {reloginDialog && <ReloginDialog/>}
            {showMarriageForm && (<CreateMarriageRecord marriageStatuses={statusRef} marriageLocations={locationRef} setRefresh={setRefresh} />)}
            {displayUpdateMarriage && (<UpdateMarriageRecord marriageStatuses={statusRef} marriageLocations={locationRef} marriageRecord={selectedItem} setSelectedItem={setSelectedItem} setRefresh={setRefresh} />)}
            {successDialog && (<SuccessDialog />)}
            {errorDialog && (<ErrorDialog2 />)}
            {warningDialog && (<WarningDialog onConfirm={marriageService.handleDeleteMarriage} />)}
            {loaderDialog && (<Loader loader={loaderDialog} />)}
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Marriage Records</h1>
                        <button className="!bg-green-600 text-white hover:!bg-green-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            onClick={() => dispatch(showCreateMarriage())}
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
                            Add New Record
                        </button>
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
                                        placeholder="Search records..."
                                        value={query}
                                        onChange={marriageService.handleQueryChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Total Marriages</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{marriageRecords.length}</h3>
                                    </div>
                                    <div className="p-3 bg-red-100 rounded-full">
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
                                            className="lucide lucide-heart h-6 w-6 text-red-700"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Completed</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{marriageRecords.filter((item) => item.status == 3).length}</h3>
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
                                            className="lucide lucide-heart h-6 w-6 text-green-700"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{marriageRecords.filter((item) => item.status === 1).length}</h3>
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
                                            className="lucide lucide-heart h-6 w-6 text-yellow-700"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="text-2xl font-semibold leading-none tracking-tight">Marriage Records</div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                    <thead className="[&amp;_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Groom
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Bride
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Date
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Status
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Location
                                            </th>
                                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&amp;_tr:last-child]:border-0">
                                        {

                                            marriageRecords.length == 0 ? (<tr className="w-full">
                                                <td colSpan={7} className="h-28  text-center">
                                                    <div className="flex items-center justify-center h-full">
                                                        <NoDataPage />
                                                    </div>
                                                </td>
                                            </tr>) :
                                                marriageRecords.map((record, index) => (
                                                    <tr key={index} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{record.groomName}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{record.brideName}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{dayjs(record.weddingDate).format("MMMM D, YYYY h:mm A")}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">{statusRef.map((item) => {
                                                                if (item.id === record.status) {
                                                                    return item.statusName;
                                                                } else {
                                                                    return null;
                                                                }
                                                            })}</span>
                                                        </td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{locationRef.map((item) => {
                                                            if (item.id === record.location) {
                                                                return item.locationName;
                                                            } else {
                                                                return null;
                                                            }
                                                        })}</td>
                                                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right relative">
                                                            <div className={`${optionIndex === index ? "" : "hidden"} absolute bg-white z-10 h-28 w-36 left-[-100%] bottom-[-80%] shadow-md rounded-md `} onClick={() => setOptionIndex(-1)}>
                                                                <ul className="flex flex-col items-start w-full">
                                                                    <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start">View Details</li>
                                                                    <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start" onClick={() => {
                                                                        // setSelectedItem(item);
                                                                        // dispatch(showUpdateOffering())
                                                                        setSelectedItem(record);
                                                                        dispatch(showUpdateMarriage());
                                                                    }}>Edit Record</li>
                                                                    <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start">Send Message</li>
                                                                    <li className="text-red-500 cursor-pointer hover:bg-gray-100 p-1 w-full text-start" onClick={() => {
                                                                        sessionStorage.setItem("id", record.id.toString());
                                                                        dispatch(showWarningDialog());
                                                                    }}>Delete Record</li>
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
                            <Pagination pages={pages} pageNumber={pageNumber} totalPage={totalPage} setPageNumber={setPageNumber} setRefresh={setRefresh} setPages={setPages}/> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}