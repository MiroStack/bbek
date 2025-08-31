import { use, useEffect, useState } from "react";
import { showMinistry, hideMinistry } from '../../../../datasource/redux/staff/church_record/MinistrySlice';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../datasource/redux/staff/hooks/hooks';
import MinistryRepo from "../../../../datasource/repositories/MinistryRepo";
import { hideLoader, showErrorDialog, showLoader, showSuccessDialog } from "../../../../datasource/redux/dialog/DialogSlice";

import OfferingRepo from "../../../../datasource/repositories/OfferingRepo";
import type { OfferingPaymentModel } from "../../../../datasource/models/Offering/OfferingPaymentModel";
import type { OfferingTypeModel } from "../../../../datasource/models/Offering/OfferingTypeModel";
import type { OfferingModel } from "../../../../datasource/models/Offering/OfferingModel";
import { hideUpdateOffering } from "../../../../datasource/redux/staff/church_record/OfferingSlice";

interface UpdateOfferingProps{
    offeringModel?:OfferingModel | null;
    setIsRefreshing:React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateOffering = ({offeringModel,setIsRefreshing}:UpdateOfferingProps) => {
    const offeringForm = useAppSelector((state) => state.offeringForm.value);
    const dispatch = useDispatch();
    const [showPayment, setShowPayment] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState<OfferingPaymentModel[]>([]);
    const [payment, setPayment] = useState("");

    const [showOffering, setShowOffering] = useState(false);
    const [offeringType, setOfferingType] = useState<OfferingTypeModel[]>([]);
    const [offering, setOffering] = useState("");

    const [memberName, setMemberName] = useState("");
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    const [modelId, setModelId] = useState<string>("");

    useEffect(() => {
        setMemberName(offeringModel!.memberName || "");
        setAmount(offeringModel!.amount || 0);
        setDate(offeringModel!.offeringDate || "");
        setNotes(offeringModel!.notes || "");
        setModelId(offeringModel!.id || "");
        setPayment(offeringModel!.paymentMethod || "")
        setOffering(offeringModel!.offeringType || "");
        getPaymentMethodResponse();
        getOferringTypeResponse();
    }, [offeringForm])

    const getPaymentMethodResponse = async () => {
        dispatch(showLoader());
        try {
            const response = await OfferingRepo.getPaymentRf();
            if (response.statusCode == 200) {
                console.log("Payment Methods:", response.data);
                setPaymentMethods(response.data);
                setPayment(response.data[0].paymentMethod);
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
            const response = await OfferingRepo.getOfferingTypeRf();
            if (response.statusCode == 200) {
                console.log("Offering Types:", response.data);
                setOfferingType(response.data);
                setOffering(response.data[0].offeringType);

            }
        } catch (err) {
            sessionStorage.setItem("message", "Error fetching offering types");
            dispatch(showErrorDialog());
            console.error("Error fetching offering types:", err);
        } finally {
            dispatch(hideLoader());
        }
    }

    const handleMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMemberName(e.target.value);
    }
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(e.target.value));
    }
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }
    const handleNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value);
    }
    const handlePayment = (newStatus: string) => {
        setPayment(newStatus);
        setShowPayment(false);
    }
    const handleShowPayment = () => setShowPayment(showPayment ? false : true);

    const handleOffering = (newStatus: string) => {
        setOffering(newStatus);
        setShowOffering(false);
    }
    const handleShowOffering = () => setShowOffering(showOffering ? false : true);



    async function handleUpdateDonation() {
        dispatch(showLoader());
        try {
            const offeringModel: OfferingModel = {
                id: modelId,
                memberName: memberName,
                amount: amount,
                offeringDate: date,
                offeringType: offering,
                paymentMethod: payment,
                notes: notes
            };
            console.log(offeringModel);
            const response = await OfferingRepo.submitOffering(offeringModel, true);
            if (response.statusCode == 200) {
                sessionStorage.setItem("message", response.message);
                dispatch(showSuccessDialog());
                dispatch(hideUpdateOffering());
                setMemberName("");
                setAmount(0);
                setDate("");
                setNotes("");
                setOffering("");
                setPayment("");
                
            } else {
                sessionStorage.setItem("message", response.message);
                dispatch(showErrorDialog());
            }

        } catch (err) {
            console.error("Save failed:", err);
        } finally {
            dispatch(hideLoader());
            setIsRefreshing(true);
        }
    }
    return (
        <>
            <div
                role="dialog"
                id="radix-«r4n»"
                aria-describedby="radix-«r4p»"
                aria-labelledby="radix-«r4o»"
                data-state="open"
                className="h-[32rem] overflow-y-auto bg-white fixed left-[50%] top-[50%] z-20 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[500px]"
            >
                <div className="flex flex-col  text-center sm:text-left">
                    <h2 id="radix-«r4o»" className="text-lg font-semibold leading-none tracking-tight">
                        Record New Donation
                    </h2>
                    <p id="radix-«r4p»" className="text-sm text-muted-foreground">
                        Enter the details of the donation. Click save when you're done.
                    </p>
                </div>
                <div className="grid gap-4 py-2">
                    <div className="grid gap-1">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-name"
                        >
                            Member Name
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-name"
                            name="member-name-input"
                            value={memberName}
                            onChange={handleMemberName}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-amount"
                        >
                            Amount
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-amount"
                            value={amount}
                            type="number"
                            onChange={handleAmount}
                            name="ministry-schedule-input"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-date"
                        >
                            Date
                        </label>
                        <input
                            className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-leader"
                            value={date}
                            type="dateTime-local"
                            onChange={handleDate}
                            name="date-input"
                            required
                        />
                    </div>
                    <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-status"
                        >
                            Payment Method
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleShowPayment}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{payment}</span>
                            <div className={`${showPayment ? "" : "hidden"} z-10 absolute bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {
                                        paymentMethods.map((item, index) => (
                                            <li key={index} className="hover:text-green-500" onClick={() => handlePayment(item.paymentMethod)}>{item.paymentMethod}</li>
                                        ))
                                    }
                                </ul>
                            </div>
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
                                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </div>

                       <div className="grid gap-2 relative">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-status"
                        >
                            Offering Type
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-«r52»"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            onClick={handleShowOffering}
                            data-state="closed"
                            className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"
                            id="new-status"
                        >
                            <span className="">{offering}</span>
                            <div className={`${showOffering ? "" : "hidden"} absolute z-10 bg-white w-100 border  top-[150%] left-[50%] -translate-y-1/2 -translate-x-1/2`}>
                                <ul className="flex flex-col items-start px-3 w-100">
                                    {
                                        offeringType.map((item, index) => (
                                            <li key={index} className="hover:text-green-500" onClick={() => handleOffering(item.offeringType)}>{item.offeringType}</li>
                                        ))
                                    }
                                </ul>
                            </div>
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
                                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="grid gap-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="new-description"
                        >
                            Notes
                        </label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="new-description"
                            name="ministry-description-input"
                            value={notes}
                            onChange={handleNotes}
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 py-2"
                        type="button"
                        name="Update-ministry-confirm-btn"
                        onClick={handleUpdateDonation}
                    >
                        Save Donation
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => dispatch(hideUpdateOffering())}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
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
                        className="lucide lucide-x h-4 w-4"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </>
    );
}