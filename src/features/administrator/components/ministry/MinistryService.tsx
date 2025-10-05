import type React from "react";
import type { PaginatedMinistryModel } from "../../../../datasource/models/Ministry/PaginatedMinistryModel";
import MinistryRepo from "../../../../datasource/repositories/MinistryRepo";
import type { MinistryStatusModel } from "../../../../datasource/models/Ministry/MinistryStatusModel";
import { useDispatch } from "react-redux";
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../../datasource/redux/dialog/DialogSlice";
import { use, useEffect, useLayoutEffect } from "react";
interface MinistryServiceProps {
    query: string;
    pageNumber: number;
    ministryData: PaginatedMinistryModel[];
    totalPage: number;
    statusList:MinistryStatusModel[];
    isRefreshing:boolean;
    setActiveMinistry: React.Dispatch<React.SetStateAction<PaginatedMinistryModel[]>>;
    setTotalMember: React.Dispatch<React.SetStateAction<number>>;
    setPages: React.Dispatch<React.SetStateAction<number[]>>;
    setTotalPage: React.Dispatch<React.SetStateAction<number>>;
    setMinistryData: React.Dispatch<React.SetStateAction<PaginatedMinistryModel[]>>;
    setIsRefreshing: React.Dispatch<React.SetStateAction<boolean>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setStatusList: React.Dispatch<React.SetStateAction<MinistryStatusModel[]>>;
}
export const MinistryService = (
    {
        query,
        pageNumber,
        ministryData,
        totalPage,
        statusList,
        isRefreshing,
        setActiveMinistry,
        setTotalMember,
        setPages,
        setTotalPage,
        setMinistryData,
        setIsRefreshing,
        setQuery,
        setStatusList
    }: MinistryServiceProps

) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (isRefreshing) {
            fetchStatusList();
            setIsRefreshing(false);
        }
    }, [isRefreshing]);

    useEffect(() => {
       fetchMinistryData();
    }, [statusList])



    useEffect(() => {

        setTotalPage(Math.ceil((ministryData[0]?.totalRows ?? 0) / 11));
        setActiveMinistry(
            ministryData.filter((item) => {
                console.log(item);
                return item.statusId === 1;
            })
        );
        let total = 0;
        ministryData.forEach((item) => {
            total += item.member ?? 0;
        })
        setTotalMember(total);
    }, [ministryData]);

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


    const fetchMinistryData = async () => {
        try {
            dispatch(showLoader());
            const res = await MinistryRepo.getPaginatedMinistries(query, pageNumber);
            dispatch(hideLoader());
            if (res.statusCode == 200) {
                setMinistryData(res.data ?? []);
            } else {
                sessionStorage.setItem("message", res.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(hideLoader());
        }
    };

    const fetchStatusList = async () => {
        try {
            dispatch(showLoader());
            const res = await MinistryRepo.getMinistryStatuses();
            dispatch(hideLoader());
            if (res.statusCode == 200) {
                setStatusList(res.data ?? []);

            } else {
                sessionStorage.setItem("message", res.message);
                dispatch(showErrorDialog());
            }

        } catch (e) {

        } finally {
            dispatch(hideLoader());
        }
    }

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsRefreshing(true);
    }
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
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
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
    return { fetchMinistryData, fetchStatusList, handleQueryChange, handleDeleteMinsitry };
}