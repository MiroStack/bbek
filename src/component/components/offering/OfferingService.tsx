import { useCallback, useEffect } from "react";
import type { PaginatedOfferingModel } from "../../../datasource/models/Offering/PaginatedOfferingModel";
import type { OfferingPaymentModel } from "../../../datasource/models/Offering/OfferingPaymentModel";
import type { OfferingTypeModel } from "../../../datasource/models/Offering/OfferingTypeModel";
import type { DonationModel } from "../../../features/staff/views/church_records/TitheOffer";
import { useAppDispatch } from "../../../datasource/redux/modules/hooks/hooks";
import { OfferingRepo } from "../../../datasource/repositories/OfferingRepo";
import { hideLoader, showErrorDialog, showLoader } from "../../../datasource/redux/dialog/DialogSlice";
interface OfferingServiceProps {
    allOffering: PaginatedOfferingModel[],
    pageNumber: number,
    totalPage: number,
    query: string,
    showSorting: boolean,
    paymentMethods: OfferingPaymentModel[],
    offeringType: OfferingTypeModel[],
    setTotalPage: React.Dispatch<React.SetStateAction<number>>,
    setPages: React.Dispatch<React.SetStateAction<number[]>>
    setDonation: React.Dispatch<React.SetStateAction<DonationModel | undefined>>
    setAllOffering: React.Dispatch<React.SetStateAction<PaginatedOfferingModel[]>>
    setPaymentMethods: React.Dispatch<React.SetStateAction<OfferingPaymentModel[]>>
    setOfferingType: React.Dispatch<React.SetStateAction<OfferingTypeModel[]>>
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    setIsRefreshing: React.Dispatch<React.SetStateAction<boolean>>
    setShowSorting: React.Dispatch<React.SetStateAction<boolean>>

}
export const OfferingService = ({
    allOffering,
    pageNumber,
    totalPage,
    query,
    showSorting,
    paymentMethods,
    offeringType,
    setTotalPage,
    setPages,
    setDonation,
    setAllOffering,
    setPaymentMethods,
    setOfferingType,
    setQuery,
    setIsRefreshing,
    setShowSorting
}: OfferingServiceProps) => {
    const dispatch = useAppDispatch();
    const offeringRepo = OfferingRepo();
    useEffect(() => {
        setTotalPage(Math.ceil((allOffering[0]?.totalRows ?? 0) / 11));
    }, [allOffering]);
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


    useEffect(() => {
        handleGetAllOffering();
    }, [paymentMethods, offeringType])

    const calculate = useCallback(() => {
        let allDonation = 0;
        let offeringDonation = 0;
        let titheDonation = 0;
        let specialDonation = 0;
        allOffering.forEach((item) => {
            allDonation += item.amount;
            switch (item.offeringType) {
                case 1:
                    titheDonation += item.amount;
                    break;
                case 2:
                    offeringDonation += item.amount;
                    break;
                case 3:
                    specialDonation += item.amount;
                    break;
            }
        })

        setDonation({
            all: allDonation,
            offering: offeringDonation,
            tithe: titheDonation,
            special_offering: specialDonation
        })
    }, [allOffering])

    const handleGetAllOffering = async () => {
        dispatch(showLoader());
        try {
            const response = await offeringRepo.getAllOffering(query, pageNumber);
            if (response.statusCode == 200) {
                setAllOffering(response.data);
            }
        } catch (e) {
            console.log(`An error occurred: ${e}`);
        } finally {
            dispatch(hideLoader());
        }
    }

    const getPaymentMethodResponse = async () => {
        dispatch(showLoader());
        try {
            const response = await offeringRepo.getPaymentRf();
            if (response.statusCode == 200) {
                console.log("Payment Methods:", response.data);
                setPaymentMethods(response.data);

            }
        } catch (err) {
            sessionStorage.setItem("message", "Error fetching payment methods");
            dispatch(showErrorDialog());
            console.error("Error fetching payment methods:", err);
        } finally {
            dispatch(hideLoader());
        }
    }

    const getOferringTypeResponse = async () => {
        dispatch(showLoader());
        try {
            const response = await offeringRepo.getOfferingTypeRf();
            if (response.statusCode == 200) {
                console.log("Offering Types:", response.data);
                setOfferingType(response.data);

            }
        } catch (err) {
            sessionStorage.setItem("message", "Error fetching offering types");
            dispatch(showErrorDialog());
            console.error("Error fetching offering types:", err);
        } finally {
            dispatch(hideLoader());
        }
    }


    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsRefreshing(true);
    }


    const handleDeleteOffering = async () => {
        dispatch(showLoader());
        try {
            const id = parseInt(sessionStorage.getItem("id") ?? '0');
            const response = await offeringRepo.deleteOffering(id);
            if (response.statusCode == 200) {
                setIsRefreshing(true);
            } else if (response.statusCode === 401) {
                sessionStorage.setItem("message", "Session expired. Kindly relogin your account.");
                dispatch(showErrorDialog());
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }
        } catch (e) {

        } finally {
            sessionStorage.removeItem("id");
        }
    }

    const handleShowSorting = () => {
        setShowSorting(!showSorting);
    }

    return { calculate, handleGetAllOffering, getPaymentMethodResponse, getOferringTypeResponse, handleQueryChange, handleShowSorting, handleDeleteOffering }
}
