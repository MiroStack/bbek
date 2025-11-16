
import { useAppDispatch, useAppSelector } from "../../../../datasource/redux/modules/hooks/hooks";
import { Loader } from "../../../landpage/components/Loader";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";
import {
    hideLoader,
  showErrorDialog,
  showLoader,
  showWarningDialog,
} from "../../../../datasource/redux/dialog/DialogSlice";

import type { PaginatedMinistryModel } from "../../../../datasource/models/Ministry/PaginatedMinistryModel";
import type { MinistryStatusModel } from "../../../../datasource/models/Ministry/MinistryStatusModel";
import { NoDataPage } from "../../../landpage/components/NoDataPage";
import { useEffect, useState } from "react";
import { ReloginDialog } from "../../../../component/dialog/ReloginDialog";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { EventRepo } from "../../../../datasource/repositories/EventRepo";
import type { EventMemberModel } from "../../../../datasource/models/Event/EventMemberModel";


export const EventMemberAdminPage = () => {
  const {eventId} = useParams();
  const dispatch = useAppDispatch();
  const reloginDialog = useAppSelector((state) => state.dialog.relogin);
  const updateMemberApplication = useAppSelector((state) => state.eventForm.memberApplicationEdit);
  const loaderDialog = useAppSelector((state) => state.dialog.loader);
  const successDialog = useAppSelector((state) => state.dialog.success);
  const warningDialog = useAppSelector((state) => state.dialog.warning);
  const errorDialog = useAppSelector((state) => state.dialog.error);
  const [selectedMemberId, setSelectedId] = useState<number>(0);
  const [statusOfMember, setStatusOfMember] = useState<string>("");
  const [eventMemberData, setEventMemberData] = useState<EventMemberModel[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [statusList, setStatusList] = useState<MinistryStatusModel[]>([]);
  const [totalMember, setTotalMember] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [totalPage, setTotalPage] = useState(1);
  const eventRepo = EventRepo();
  useEffect(() => {
        if (isRefreshing) {
            setIsRefreshing(false);
        }
    }, [isRefreshing]);

    useEffect(() => {
       fetchEventMembersData();
    }, [statusList])

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


    const fetchEventMembersData = async () => {
        try {
            dispatch(showLoader());
            const res = await eventRepo.getMembersPerEvent(parseInt(eventId??"0"), query, pageNumber);
            const totalPageRes = await eventRepo.viewTotalMemberPerEvent(parseInt(eventId??"0"));
            dispatch(hideLoader());
            if (res.statusCode == 200 && totalPageRes.statusCode == 200 && totalPageRes.statusCode == 200) {
                setEventMemberData(res.data ?? []);
                setTotalMember(totalPageRes.data ?? 0);
            } 
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(hideLoader());
        }
    };

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsRefreshing(true);
    }

  return (
    <>
      {reloginDialog && <ReloginDialog/>}
    
      <Loader loader={loaderDialog} />
      {successDialog && (<SuccessDialog />)}
      {/* {warningDialog && (<WarningDialog onConfirm={ministryService.handleDeleteMinsitry} />)} */}
      {errorDialog && (<ErrorDialog2 />)}
      <div
        className={`w-100  h-auto flex flex-col items-center justify-center`}
      >
        <div className="w-100 p-6 staff-ministries-page">
         
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
                    placeholder="Search member..."
                    value={query}
                    onChange={handleQueryChange}
                    name="search-ministries-input"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    name="export-ministries-csv-btn"
                  >
                    Export CSV
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Event Members
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm ministries-table">
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Name
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Event
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Join Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    {
                      eventMemberData.length == 0 ? (
                        <tr className="w-full">
                          <td colSpan={7} className="h-28  text-center">
                            <div className="flex items-center justify-center h-full">
                              <NoDataPage />
                            </div>
                          </td>
                        </tr>
                      ) : (eventMemberData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                            {item.fullname}
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {item.statusName}
                          </td>
                           <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {item.eventName}
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {dayjs(item.createdDt).format("MMM DD, YYYY hh:mm A")}
                          </td>
                         
                        </tr>
                      )))
                    }
                  </tbody>
                </table>
              </div>
              <div className="w-full p-4 flex items-center justify-center relative">
                <button className="cursor-pointer"
                  onClick={() => {
                    if (pageNumber > 1) {
                      setPageNumber(pageNumber - 1);
                      setIsRefreshing(true);
                    } else {
                      sessionStorage.setItem("message", "No previous records available");
                      dispatch(showErrorDialog());
                    }
                  }}
                >&laquo;</button>
                <span className="mx-4">{pageNumber} of {totalPage}</span>
                <button className="cursor-pointer"
                  onClick={() => {
                    if (pageNumber < totalPage) {
                      setPageNumber(pageNumber + 1);
                      setIsRefreshing(true);
                    } else {
                      sessionStorage.setItem("message", "No more records available");
                      dispatch(showErrorDialog());
                    }
                  }}
                >&raquo;</button>

                <div className="absolute right-4 flex items-center gap-2">
                  {
                    pages.map((page, index) => (
                      <span key={index} className={`p-1 ${pageNumber == page ? 'bg-green-200' : 'bg-gray-100'} w-7 text-center hover:cursor-pointer`}
                        onClick={() => {
                          if (totalPage < page) {
                            sessionStorage.setItem("message", "No more records available");
                            dispatch(showErrorDialog());
                          } else {
                            setPageNumber(page);
                            setIsRefreshing(true);

                          }

                        }}
                      >{page}</span>
                    ))

                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
