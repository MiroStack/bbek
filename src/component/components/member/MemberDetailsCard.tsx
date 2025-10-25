import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaPen, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { MemberRepo } from "../../../datasource/repositories/MemberRepo";
import type { MemberDetailsModel } from "../../../datasource/models/member/MemberDetailsModel";
import dayjs from "dayjs";
import { ViewMemberDetails } from "./ViewMemberDetails";
import { useAppDispatch, useAppSelector } from "../../../datasource/redux/modules/hooks/hooks";
import { hideLoader, showLoader } from "../../../datasource/redux/dialog/DialogSlice";
import { Loader } from "../../dialog/Loader";
import { SuccessDialog } from "../../dialog/SuccessDialog";
import { ErrorDialog2 } from "../../dialog/ErrorDialog2";
import { EditMemberDetails } from "./EditMemberDetails";

export const MemberDetailsCard = () => {
  const dialog = useAppSelector((state)=>state.dialog);
  const dispatch = useAppDispatch();
  const { memberId } = useParams();
 
  const [memberDetails, setMemberDetails]= useState<MemberDetailsModel>();
  const memberRepo = MemberRepo();
  const [editDetails, setEditDetails] = useState<boolean>(false);

  useEffect(()=>{
    fetchMemberDetails();
  },[])

  const fetchMemberDetails = async ()=>{
    try{
        dispatch(showLoader())
        const response = await memberRepo.getMemberDetails(Number(memberId)?? 0);
        dispatch(hideLoader());
        if(response.statusCode == 200){
              setMemberDetails(response.data);
        }
    }catch(e){
       
    }

  }



    return (
       <>
          {dialog.success && <SuccessDialog/>}
          {dialog.error && <ErrorDialog2/>}
          {memberDetails ? (
             !editDetails? 
            <ViewMemberDetails memberDetails={memberDetails} setEditDetails={setEditDetails} />:<EditMemberDetails memberDetails={memberDetails} setEditDetails={setEditDetails}/>
          ) : (
            <Loader loader={dialog.loader}/>
          )}
       </>
    );

};
