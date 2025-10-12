
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineWarning } from 'react-icons/ai';
import { useAppSelector } from "../../datasource/redux/modules/hooks/hooks.tsx";
import { useDispatch } from "react-redux";
import { hideSuccessDialog, hideWarningDialog } from "../../datasource/redux/dialog/DialogSlice.ts";
type WarningDialogProps = {
    onConfirm: () => void;
}
export const WarningDialog = ({onConfirm}:WarningDialogProps) => {
    const warningDialog = useAppSelector((state) => state.dialog.warning);
    const dispatch = useDispatch();
    return (
        <>
            {/* {${Success?"fixed":"hidden"}} */}
            <div className={`${warningDialog ? "fixed" : "hidden"} bg-white w-[24rem] md:w-[30rem]  lg:w-[24rem]  h-[18rem] p-3  rounded-lg shadow-lg items-center justify-center flex-col z-[1500] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div className="h-100 flex flex-col items-center justify-center space-y-1.5 text-center sm:text-left">
                    <div className="text-5xl text-orange-400"><AiOutlineWarning /></div>
                    <h3 className="font-medium text-xl tracking-wider">Are you sure about this action?</h3>
                   <div className="flex gap-3">
                     <button className="bg-gray-300 w-40 h-8 rounded-md text-white my-3" onClick={
                        () => {
                            dispatch(hideWarningDialog());
                        }
                    }>Close</button>
                    <button className="bg-orange-400 w-40 h-8 rounded-md text-white my-3" onClick={
                        () => {
                            onConfirm();
                            dispatch(hideWarningDialog());
                        }
                    }>Proceed</button>
                   </div>
                </div>
            </div>
        </>
    )
}