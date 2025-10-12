import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../datasource/redux/modules/hooks/hooks";
import type { MemberModel } from "../../../../datasource/models/member/MemberModel";
import {MemberRepo} from "../../../../datasource/repositories/MemberRepo";
import { hideLoader, showErrorDialog, showLoader } from "../../../../datasource/redux/dialog/DialogSlice";
import { Loader } from "../../../../component/dialog/Loader";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";

import dayjs from "dayjs";
import { NoDataPage } from "../../../landpage/components/NoDataPage";
import { Pagination } from "../../../../component/components/pagination/Pagination";
import { ReloginDialog } from "../../../../component/dialog/ReloginDialog";

export const MemberRecordPage = () => {
    const dispatch = useAppDispatch();
    const reloginDialog = useAppSelector((state) => state.dialog.relogin);
    const loader = useAppSelector((state) => state.dialog.loader);
    const success = useAppSelector((state) => state.dialog.success);
    const error = useAppSelector((state) => state.dialog.error);
    const [memberList, setMemberList] = useState<MemberModel[]>([]);
    const [isRefresh, setIsRefresh] = useState<boolean>(true);
    const [query, setQuery] = useState<string>("");
    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [totalPage, setTotalPage] = useState(1);
    const [selectedId, setSelectedId] = useState(-1);
    useEffect(() => {
        if (isRefresh) {
            handleGetMembers();
            setIsRefresh(false);
        }

    }, [isRefresh]);
     const memberRepo = MemberRepo();
    const handleGetMembers = async () => {
        try {
            dispatch(showLoader());
            const response = await memberRepo.getMembers(query, pageNumber);
            dispatch(hideLoader());
            if (response.statusCode == 200) {
                //  console.log(response.data);
                setMemberList(response.data);
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
            {reloginDialog && <ReloginDialog />}
            {loader && <Loader loader={loader} />}
            {success && <SuccessDialog />}
            {error && <ErrorDialog2 />}
            <div className="w-100 h-auto flex flex-col items-center justify-center">
                <div className="p-6">
                    <div className=" flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Church Members</h1>
                        <a
                            className="!bg-green-600 text-white hover:!bg-green-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            href="/staff/members/new"
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
                                className="lucide lucide-user-plus h-4 w-4 mr-2"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                <line x1="22" x2="16" y1="11" y2="11"></line>
                            </svg>
                            Add New Member
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
                                        placeholder="Search members..."
                                        onChange={handleQuery}
                                        value={query}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                        type="button"
                                        id="radix-«r6c»"
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
                                        name="export-members-csv-btn"
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
                                            Name
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            Age
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            Address
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden lg:table-cell">
                                            Status
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                            Active
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                            Join Date
                                        </th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&amp;_tr:last-child]:border-0">
                                    {
                                        memberList.length == 0 ? (
                                            (
                                                <tr className="w-full">
                                                    <td colSpan={7} className="h-28  text-center">
                                                        <div className="flex items-center justify-center h-full">
                                                            <NoDataPage />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        ) : memberList.map((item, index) => (<tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{item.memberName}</td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                {item.age}
                                            </td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                                                {item.address}
                                            </td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden lg:table-cell">
                                                {item.status}
                                            </td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <div
                                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-100 text-green-800"
                                                >
                                                    {item.active ? "Active" : "Inactive"}
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{dayjs(item.joinDate).format("MMMM D, YYYY")}</td>
                                            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                                                <button
                                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                                    type="button"
                                                    id="radix-«r6e»"
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
                                                        className="lucide lucide-ellipsis h-4 w-4"
                                                    >
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="19" cy="12" r="1"></circle>
                                                        <circle cx="5" cy="12" r="1"></circle>
                                                    </svg>
                                                    <span className="sr-only">Actions</span>
                                                </button>
                                            </td>
                                        </tr>))
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