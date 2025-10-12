import { useEffect } from "react";
import type { MarriageModel } from "../../../datasource/models/Marriage/MarriageModel";
import type { MarriageStatusesModel } from "../../../datasource/models/Marriage/MarriageStatusesModel";
import type { MarriageLocationsModel } from "../../../datasource/models/Marriage/MarriageLocationsModel";
import { useAppDispatch } from "../../../datasource/redux/modules/hooks/hooks";
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../datasource/redux/dialog/DialogSlice";
import { MarriageRepo } from "../../../datasource/repositories/MarriageRepo";
interface MarriageServiceProps{
  marriageRecords:MarriageModel[],
  pageNumber:number,
  totalPage:number,
  query:string,
  setStatusRef:React.Dispatch<React.SetStateAction<MarriageStatusesModel[]>>,
  setTotalPage:React.Dispatch<React.SetStateAction<number>>,
  setPages:React.Dispatch<React.SetStateAction<number[]>>
  setLocationRef:React.Dispatch<React.SetStateAction<MarriageLocationsModel[]>>,
  setMarriageRecords:React.Dispatch<React.SetStateAction<MarriageModel[]>>,
  setQuery:React.Dispatch<React.SetStateAction<string>>,
  setRefresh:React.Dispatch<React.SetStateAction<boolean>>,
}
export const MarriageService = ({
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
}:MarriageServiceProps) => {
    const marriageRepo = MarriageRepo();
    const dispatch = useAppDispatch();
    const fetchStatusesRef = async () => {
        dispatch(showLoader());
        const response = await marriageRepo.getaAllMarriageStatus();
        try {

            if (response.statusCode === 200) {
                console.log(response.data);
                setStatusRef(response.data);
            } 
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(hideLoader());
        }
    }
    useEffect(() => {
        setTotalPage(Math.ceil((marriageRecords[0]?.totalRows ?? 0) / 11));
    }, [marriageRecords]);

    const fetchLocationRef = async () => {
        dispatch(showLoader());
        const response = await marriageRepo.getaAllMarriageLocation();
        try {
            if (response.statusCode === 200) {
                console.log(response.data);
                setLocationRef(response.data);
            } 
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(hideLoader());
        }
    }
    const fetchMarriageRecords = async () => {
        dispatch(showLoader());
        const response = await marriageRepo.getAllMarriage(query, pageNumber);
        try {
            if (response.statusCode === 200) {
                console.log(response.data);
                setMarriageRecords(response.data);
                dispatch(hideLoader());
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
                dispatch(hideLoader());
            }
        } catch (e) {

        }
        finally {
            dispatch(hideLoader());
        }
    }
    const handleDeleteMarriage = async () => {
        dispatch(showLoader());
        try {
            const id = sessionStorage.getItem("id");
            if (id) {
                const response = await marriageRepo.deleteMarriage(Number(id));
                if (response.statusCode === 200) {
                    sessionStorage.setItem("message", response.message);
                    dispatch(showSuccessDialog());
                    dispatch(hideLoader());
                    setRefresh(true);
                } 
            }
        } catch (e) {

        } finally {
            dispatch(hideLoader());
        }
    }
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setRefresh(true);
    }
    return {fetchStatusesRef, fetchLocationRef, fetchMarriageRecords, handleDeleteMarriage, handleQueryChange}
}