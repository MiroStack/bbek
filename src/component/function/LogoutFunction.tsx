import { hideAllEventForm } from "../../datasource/redux/modules/church_record/EventSlice";
import { hideAllMinistryForm } from "../../datasource/redux/modules/church_record/MinistrySlice";
import { clearUserInfo } from "../../datasource/redux/user/UserSlice";
import { closeAllDialog } from "../../datasource/redux/dialog/DialogSlice";
import { Cookies } from "../../util/Cookies";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../datasource/redux/modules/hooks/hooks";
export const LogoutFunction = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return {
        logout() {
            Cookies.deleteCookie("auth_token");
            dispatch(clearUserInfo());
            dispatch(closeAllDialog());
            dispatch(hideAllEventForm());
            dispatch(hideAllMinistryForm());
            sessionStorage.clear();
            navigate("/");
        }
    }
}