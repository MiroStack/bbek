import React, { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../datasource/redux/modules/hooks/hooks";
import { MinistryRepo } from "../../../datasource/repositories/MinistryRepo";
import {
  hideLoader,
  showLoader,
  showSuccessDialog,
} from "../../../datasource/redux/dialog/DialogSlice";
import {
  hideUpdateMemberApplication,
  hideUpdateMinistry,
} from "../../../datasource/redux/modules/church_record/MinistrySlice";

// NEW IMPORTS
import { FiChevronDown, FiX } from "react-icons/fi";
import { EventRepo } from "../../../datasource/repositories/EventRepo";
import { hideUpdateEventMemberApplication } from "../../../datasource/redux/modules/church_record/EventSlice";

type UpdateMemberApplicationFormProps = {
  pivotId: number;
  statusName: string;
  setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UpdateMemberEventApplication = ({
  pivotId,
  statusName,
  setIsRefresh,
}: UpdateMemberApplicationFormProps) => {
  const dispatch = useDispatch();
  const [showStatus, setShowStatus] = useState(false);
  const [status, setStatus] = useState<string>(statusName);

  const eventRepo = EventRepo();

  const handleSetDescription = (newStatus: string) => {
    setStatus(newStatus);
  };

  const handleShowStatus = () => setShowStatus((prev) => !prev);

  async function handleUpdateApplicationStatus(e: FormEvent) {
    e.preventDefault();
    dispatch(showLoader());

    try {
      const response = await eventRepo.updateMemberEventJoinApplication(
        pivotId,
        status
      );

      if (response.statusCode === 200) {
        dispatch(hideUpdateEventMemberApplication());
        sessionStorage.setItem("message", response.message);
        setStatus("PENDING");

        setTimeout(() => {
          dispatch(showSuccessDialog());
          setIsRefresh(true);
          dispatch(hideLoader());
        }, 1500);
      } else {
        dispatch(hideLoader());
      }
    } catch (err) {
      console.error("Save failed:", err);
      dispatch(hideLoader());
    }
  }

  return (
    <>
      <form
        onSubmit={handleUpdateApplicationStatus}
        className=" overflow-y-auto bg-white fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border p-6 shadow-lg sm:rounded-lg sm:max-w-[500px]"
      >
        <div className="flex flex-col text-center sm:text-left">
          <h2 className="text-lg font-semibold">Update Event</h2>
          <p className="text-sm text-muted-foreground">
            Update the application of member.
          </p>
        </div>

        <div className="grid gap-4 py-2">
          {/* Status Dropdown */}
          <div className="grid gap-2 relative">
            <label className="text-sm font-medium" htmlFor="new-status">
              Status
            </label>

            <button
              type="button"
              role="combobox"
              aria-expanded={showStatus}
              onClick={handleShowStatus}
              id="new-status"
              className="flex h-8 w-full items-center justify-between rounded-md border px-3 py-2 text-sm"
            >
              <span>{status}</span>

              {/* react-icons chevron */}
              <FiChevronDown className="opacity-50" size={18} />

              {/* Dropdown */}
              {showStatus && (
                <div className="absolute bg-white border w-full top-full left-0 mt-1 shadow-sm z-50 rounded-md">
                  <ul className="flex flex-col items-start px-3 py-2">
                    <li
                      className="hover:text-green-500 cursor-pointer"
                      onClick={() => handleSetDescription("PENDING")}
                    >
                      PENDING
                    </li>
                    <li
                      className="hover:text-green-500 cursor-pointer"
                      onClick={() => handleSetDescription("APPROVED")}
                    >
                      APPROVED
                    </li>
                    <li
                      className="hover:text-green-500 cursor-pointer"
                      onClick={() => handleSetDescription("DISSAPROVED")}
                    >
                      DISSAPROVED
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <button
              className="bg-primary text-white rounded-md px-4 py-2 text-sm hover:bg-primary/90"
              type="submit"
            >
              Update Applciation
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => dispatch(hideUpdateEventMemberApplication())}
          className="absolute right-4 top-4 opacity-70 hover:opacity-100"
        >
          {/* react-icon X */}
          <FiX size={20} />
        </button>
      </form>
    </>
  );
};
