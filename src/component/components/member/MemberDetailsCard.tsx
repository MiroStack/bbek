import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaPen, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { MemberRepo } from "../../../datasource/repositories/MemberRepo";
import type { MemberDetailsModel } from "../../../datasource/models/member/MemberDetailsModel";
import dayjs from "dayjs";
import { ViewMemberDetails } from "./ViewMemberDetails";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../datasource/redux/modules/hooks/hooks";
import {
  hideLoader,
  showLoader,
} from "../../../datasource/redux/dialog/DialogSlice";
import { Loader } from "../../dialog/Loader";
import { SuccessDialog } from "../../dialog/SuccessDialog";
import { ErrorDialog2 } from "../../dialog/ErrorDialog2";
import { EditMemberDetails } from "./EditMemberDetails";
import { BaptismRepo } from "../../../datasource/repositories/BaptismRepo";
import type { UserAndIdModel } from "../../../datasource/models/User/UserAndIdModel";
import type { DepartmentModel } from "../../../datasource/models/member/DepartmentModel";
import type { PositionModel } from "../../../datasource/models/member/PositionModel";

export const MemberDetailsCard = () => {
  const dialog = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();
  const { memberId } = useParams();

  const [memberDetails, setMemberDetails] = useState<MemberDetailsModel>();
  const [isRefresh, setRefresh] = useState<boolean>(true);
  const memberRepo = MemberRepo();
  const baptismRepo = BaptismRepo();
  const [editDetails, setEditDetails] = useState<boolean>(false);
  const [officiantList, setOfficiantList] = useState<UserAndIdModel[]>([]);
  const [departmentList, setDepartmentList] = useState<DepartmentModel[]>([]);
  const [positionList, setPositionList] = useState<PositionModel[]>([]);



  useEffect(() => {
    if (isRefresh) {
      fetchMemberDetails();
      fetchOfficiantList();
      fetchDepartmentList();
      fetchPositionList();
      setRefresh(false);
    }
  }, [isRefresh]);

  const fetchMemberDetails = async () => {
    try {
      dispatch(showLoader());
      const response = await memberRepo.getMemberDetails(Number(memberId) ?? 0);
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        setMemberDetails(response.data);
      }
    } catch (e) {}
  };

  const fetchDepartmentList = async () => {
    try {
      dispatch(showLoader());
      const response = await memberRepo.departments();
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        setDepartmentList(response.data);
      }
    } catch (e) {}
  };

  const fetchPositionList = async () => {
    try {
      dispatch(showLoader());
      const response = await memberRepo.positions();
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        setPositionList(response.data);
      }
    } catch (e) {}
  };

  const fetchOfficiantList = async () => {
    try {
      dispatch(showLoader());
      const response = await baptismRepo.getOfficiants();
      dispatch(hideLoader());
      if (response.statusCode == 200) {
        setOfficiantList(response.data);
      }
    } catch (e) {}
  };

  return (
    <>
      {dialog.success && <SuccessDialog />}
      {dialog.error && <ErrorDialog2 />}
      {memberDetails ? (
        !editDetails ? (
          <ViewMemberDetails
            memberDetails={memberDetails}
            departmentList={departmentList}
            positionList={positionList}
            setEditDetails={setEditDetails}
          />
        ) : (
          <EditMemberDetails
            setRefresh={setRefresh}
            memberDetails={memberDetails}
            positionList={positionList}
            departmentList={departmentList}
            officiantList={officiantList}
            setEditDetails={setEditDetails}
          />
        )
      ) : (
        dialog.loader&&<Loader loader={dialog.loader} />
      )}
    </>
  );
};
