
import { useDispatch } from "react-redux";
import { hideErrorDialog, hideLoader, hideRelogin, hideSuccessDialog } from "../../datasource/redux/dialog/DialogSlice.ts";
import { IoIosCloseCircle } from "react-icons/io";
import { useAppSelector } from "../../datasource/redux/staff/hooks/hooks.tsx";
import { IoWarningOutline } from "react-icons/io5";
import { Cookies } from "../../util/Cookies.ts";
import { clearUserInfo } from "../../datasource/redux/user/UserSlice.ts";
import { useNavigate } from "react-router-dom";
export const ReloginDialog = () => {
    const reloginDialog = useAppSelector((state) => state.dialog.relogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            {/* {${Success?"fixed":"hidden"}} */}
            <div className={`${reloginDialog ? "fixed" : "hidden"} bg-white w-[24rem] md:w-[30rem]  lg:w-[24rem]  h-[18rem] p-3  rounded-lg shadow-lg items-center justify-center flex-col z-[2000] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <div className="h-100 flex flex-col items-center justify-center space-y-1.5 text-center sm:text-left">
                    <div className="text-5xl text-red-600"><IoWarningOutline /></div>
                    <h3 className="font-medium text-xl tracking-wider mb-2">Unauthorized</h3>
                    <p>It look's like your session expired. Please login again.</p>
                    <button className="bg-blue-700 w-40 h-8 rounded-md text-white my-3" onClick={
                        () => {
                            Cookies.deleteCookie("auth_token");
                            dispatch(clearUserInfo());
                            dispatch(hideLoader());
                            dispatch(hideSuccessDialog());
                            dispatch(hideErrorDialog());
                            dispatch(hideRelogin())
                            navigate("/");
                        }
                    }>Close</button>
                </div>
            </div>
        </>
    )
}