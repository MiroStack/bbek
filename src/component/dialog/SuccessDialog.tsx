
import { IoIosCheckmarkCircle } from "react-icons/io";

import { useAppSelector } from "../../datasource/redux/staff/hooks/hooks.tsx";
import { useDispatch } from "react-redux";
import { hideSuccessDialog } from "../../datasource/redux/dialog/DialogSlice.ts";
export const SuccessDialog = () => {
    const success_dialog = useAppSelector((state) => state.dialog.success);
    const dispatch = useDispatch();
    return (
        <>
            {/* {${Success?"fixed":"hidden"}} */}
            <div className={`${success_dialog ? "fixed" : "hidden"} bg-white w-[24rem] md:w-[30rem]  lg:w-[24rem]  h-[18rem] p-3  rounded-lg shadow-lg items-center justify-center flex-col z-[1500] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div className="h-100 flex flex-col items-center justify-center space-y-1.5 text-center sm:text-left">
                    <div className="text-5xl text-green-600"><IoIosCheckmarkCircle /></div>
                    <h3 className="font-medium text-xl tracking-wider mb-2">Success</h3>
                    <p>{sessionStorage.getItem("message")}</p>
                    <button className="bg-green-700 w-40 h-8 rounded-md text-white my-3" onClick={
                        () => {
                            dispatch(hideSuccessDialog());
                            sessionStorage.removeItem("message");
                        }
                    }>Close</button>
                </div>
            </div>
        </>
    )
}