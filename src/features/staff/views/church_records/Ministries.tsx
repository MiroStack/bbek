import {
  showMinistry,
  showUpdateMinistry,
} from "../../../../datasource/redux/staff/church_record/MinistrySlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../datasource/redux/staff/hooks/hooks";
import { useEffect, useState } from "react";
import MinistryRepo from "../../../../datasource/repositories/MinistryRepo";
import type { MinistryModel } from "../../../../datasource/models/MinistryModel";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { CreateMinistryForm } from "../../components/ministry/CreateMinistryForm";
import { Loader } from "../../../landpage/components/Loader";
import { SuccessDialog } from "../../../../component/dialog/SuccessDialog";
import { WarningDialog } from "../../../../component/dialog/WarningDialog";
import { ErrorDialog2 } from "../../../../component/dialog/ErrorDialog2";
import {
  hideLoader,
  showErrorDialog,
  showLoader,
  showSuccessDialog,
  showWarningDialog,
} from "../../../../datasource/redux/dialog/DialogSlice";
import { UpdateMinistryForm } from "../../components/ministry/UpdateMinistryForm";

export const MinistriesStaffPage = () => {
  const ministryForm = useAppSelector((state) => state.ministryForm.value);
  const ministryEditForm = useAppSelector((state) => state.ministryForm.edit);
  const loaderDialog = useAppSelector((state) => state.dialog.loader);
  const successDialog = useAppSelector((state) => state.dialog.success);
  const warningDialog = useAppSelector((state) => state.dialog.warning);
  const errorDialog = useAppSelector((state) => state.dialog.error);
  const [ministryData, setMinistryData] = useState<MinistryModel[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [activeMinistry, setActiveMinistry] = useState<MinistryModel[]>([]);
   const [totalMember, setTotalMember] = useState<number>(0);
  useEffect(() => {
    if (isRefreshing) {
      fetchMinistryData();
      // console.log(ministryData);
      setIsRefreshing(false);
    }
  }, [isRefreshing]);
  const fetchMinistryData = async () => {
    try {
      const res = await MinistryRepo.getAllMinistry();
      setMinistryData(res);
       setActiveMinistry(
        res.filter((item, index) => {
          console.log(item.statusName.toLowerCase() === "active");
          return item.statusName.toLowerCase() === "active";
        })
      );
      let total = 0;
      res.forEach((item, index)=>{
        total += parseInt(item.member??0);
      })
      setTotalMember(total);
    } catch (e) {}
  };
  const dispatch = useDispatch();

  const handleDeleteMinsitry = async () => {
    dispatch(showLoader());
    try {
      const response = await MinistryRepo.deleteMinistry(
        Number(sessionStorage.getItem("id"))
      );
      if (response.statusCode == 200) {
        setTimeout(() => {
          sessionStorage.setItem("message", response.message);
          dispatch(showSuccessDialog());
          dispatch(hideLoader());
        }, 1500);
      }
    } catch (e) {
      console.error("Error deleting ministry:", e);
      sessionStorage.setItem(
        "message",
        "Failed to delete ministry. Please try again."
      );
      dispatch(hideLoader());
      dispatch(showErrorDialog());
    } finally {
      setIsRefreshing(true);
      sessionStorage.removeItem("id");
    }
  };

  return (
    <>
      <div className={`${ministryForm ? "" : "hidden"}`}>
        <CreateMinistryForm setRefresh={setIsRefreshing}/>
      </div>
      <div className={`${ministryEditForm ? "" : "hidden"}`}>
        <UpdateMinistryForm setIsRefresh={setIsRefreshing} />
      </div>
      <div className="">
        <Loader loader={loaderDialog} />
      </div>

      <div className={`${successDialog ? "" : "hidden"}`}>
        <SuccessDialog />
      </div>
      <div className={`${warningDialog ? "" : "hidden"}`}>
        <WarningDialog onConfirm={handleDeleteMinsitry} />
      </div>
      <div className={`${errorDialog ? "" : "hidden"}`}>
        <ErrorDialog2 />
      </div>

      <div
        className={`w-100  h-auto flex flex-col items-center justify-center`}
      >
        <div className="w-[80%] p-6 staff-ministries-page">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Ministries</h1>
            <button
              onClick={() => dispatch(showMinistry())}
              className="!bg-green-600 text-white hover:!bg-green-500  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              name="create-ministry-btn"
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
              Create Ministry
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
                    placeholder="Search ministries..."
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm total-ministries-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Ministries
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {ministryData.length}
                    </h3>
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
                      className="lucide lucide-users h-6 w-6 text-blue-700"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm active-ministries-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Active Ministries
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {activeMinistry.length}
                    </h3>
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
                      className="lucide lucide-users h-6 w-6 text-green-700"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm total-members-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Total Members
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {totalMember}
                    </h3>
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
                      className="lucide lucide-users h-6 w-6 text-purple-700"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Ministry List
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
                        Schedule
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Leader
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Members
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    {ministryData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                          {item.ministryName}
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          {item.schedule}
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          {item.leader}
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            {item.statusName}
                          </span>
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          {item.member}
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <FaEdit
                              className="text-green-700 hover:cursor-pointer text-lg"
                              onClick={() => {
                                sessionStorage.setItem(
                                  "id",
                                  item.id.toString()
                                );
                                dispatch(showUpdateMinistry());
                              }}
                            />
                            <FaRegTrashAlt
                              className="text-red-700 hover:cursor-pointer text-lg"
                              onClick={() => {
                                sessionStorage.setItem(
                                  "id",
                                  item.id.toString()
                                );
                                dispatch(showWarningDialog());
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
