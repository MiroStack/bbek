import { useEffect, useState } from "react";
import type { BaptismResponseModel } from "../../../../datasource/models/baptism/BaptismResponseModel";
import BaptismRepo from "../../../../datasource/repositories/BaptismRepo";
import { hideLoader, showErrorDialog, showLoader } from "../../../../datasource/redux/dialog/DialogSlice";
import { useAppDispatch, useAppSelector } from "../../../../datasource/redux/staff/hooks/hooks";
import { NoDataPage } from "../../../landpage/components/NoDataPage";
import { Pagination } from "../../components/pagination/Pagination";
import { UpdateBaptismRecord } from "../../components/baptism/UpdateBaptismRecord";
import { showUpdateBaptism } from "../../../../datasource/redux/staff/service/BaptismSlice";
import { Loader } from "../../../../component/dialog/Loader";
import dayjs from "dayjs";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";

export const WaterBaptismAdminPage = () => {
    const dispatch = useAppDispatch();
    const editBaptism = useAppSelector((state) => state.baptism.edit);
    const loader = useAppSelector((state) => state.dialog.loader);
    const success = useAppSelector((state) => state.dialog.success);
    const error = useAppSelector((state) => state.dialog.error);
    const [baptismList, setBaptismList] = useState<BaptismResponseModel[]>([]);
    const [isRefresh, setIsRefresh] = useState<boolean>(true);
    const [query, setQuery] = useState<string>("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [totalPage, setTotalPage] = useState(1);
    const [selectedId, setSelectedId] = useState(-1);
    useEffect(() => {
        if (isRefresh) {
            handleGetBaptism();
            setIsRefresh(false);
        }

    }, [isRefresh]);

    const handleGetBaptism = async () => {
        try {
            dispatch(showLoader());
            const response = await BaptismRepo.getBaptism(query, pageNumber);
            dispatch(hideLoader());
            if (response.statusCode == 200) {
                setBaptismList(response.data);
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {

        } finally {

        }
    }

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsRefresh(true);
    }
    return (
        <>
            {editBaptism && <UpdateBaptismRecord setIsRefresh={setIsRefresh}/>}
            {loader && <Loader loader={loader} />}
            {success && <SuccessDialog />}
            {error && <ErrorDialog2 />}

            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="p-6 staff-baptism-page" >
                    <div className="flex justify-between items-center mb-6 baptism-page-title" >
                        <h1 className="text-2xl font-bold">Water Baptism Records</h1>
                        <button
                            className="!bg-green-600 text-white hover:!bg-green-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            name="add-new-baptism-btn"
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
                                className="lucide lucide-file-text h-4 w-4 mr-2"
                            >
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                            </svg>
                            Add New Baptism
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm total-baptisms-card" >
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Total Baptisms</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">4</h3>
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
                                            className="lucide lucide-droplets h-6 w-6 text-blue-700"
                                        >
                                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm this-year-baptisms-card" >
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">This Year</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">2</h3>
                                    </div>
                                    <div className="p-3 bg-cyan-100 rounded-full">
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
                                            className="lucide lucide-droplets h-6 w-6 text-cyan-700"
                                        >
                                            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                                            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm certificates-issued-card" >
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Certificates Issued</p>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-1">3</h3>
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
                                            className="lucide lucide-file-text h-6 w-6 text-green-700"
                                        >
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                            <path d="M10 9H8"></path>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
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
                                        placeholder="Search baptism records..."
                                        value={query}
                                        onChange={handleQuery}
                                        name="search-baptism-input"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                        name="export-baptism-csv-btn"
                                    >
                                        Export CSV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border baptism-records-table" >
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm ">
                                <thead className="[&amp;_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Name
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Age
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Baptism Status
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Baptism Date
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            Officiant
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            Location
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Certificate
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&amp;_tr:last-child]:border-0">
                                    {
                                        baptismList.length == 0 ? (<tr className="w-full">
                                            <td colSpan={7} className="h-28  text-center">
                                                <div className="flex items-center justify-center h-full">
                                                    <NoDataPage />
                                                </div>
                                            </td>
                                        </tr>) :
                                            baptismList.map((item, index) => (
                                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                                                        {item.userInfoModel.firstname} {item.userInfoModel.middlename} {item.userInfoModel.lastname}</td>
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{item.userInfoModel.age}</td>
                                                    <td className={` p-4 align-middle [&amp;:has([role=checkbox])]:pr-0`}>
                                                        <span className={`${item.status == "BAPTIZED" ? 'bg-green-100' : 'bg-blue-100'} px-2 py-1 rounded-full text-xs `}>   {item.status}</span>
                                                    </td>
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{item.baptismDate == null ? '--' : dayjs(item.baptismDate).format("MMMM D, YYYY h:mm A")}</td>
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{item.baptismOfficiant ?? '--'}</td>
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                        {item.location ?? '--'}
                                                    </td>
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                        <span className={`${item.certificateStatus == "ISSUED" ? 'bg-green-100' : 'bg-blue-100'} px-2 py-1 rounded-full text-xs `}>   {item.certificateStatus}</span>
                                                    </td>
                                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right relative">
                                                        <div className={`${selectedId === item.id ? "" : "hidden"} absolute bg-white z-10 h-auto w-36 left-[-100%] bottom-[-80%] shadow-md rounded-md `} onClick={() => setSelectedId(-1)}>
                                                            <ul className="flex flex-col items-start w-full">
                                                                <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start">View Details</li>
                                                                <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start" onClick={() => {
                                                                    dispatch(showUpdateBaptism(item));
                                                                }}>Edit Record</li>
                                                                <li className="cursor-pointer hover:bg-gray-100 p-1 w-full text-start">Send Message</li>

                                                            </ul>
                                                        </div>
                                                        <button
                                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                                            type="button"
                                                            onClick={() => { setSelectedId(item.id) }}
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
                        <Pagination pages={pages} pageNumber={pageNumber} totalPage={totalPage} setPageNumber={setPageNumber} setRefresh={setIsRefresh} setPages={setPages} />
                    </div>
                </div>
            </div>
        </>
    )
}