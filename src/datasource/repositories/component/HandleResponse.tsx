import { useAppDispatch } from "../../redux/modules/hooks/hooks";
import { showErrorDialog, showRelogin } from "../../redux/dialog/DialogSlice";
export const HandleResponse = () => {
      const dispatch = useAppDispatch();

    return {
         commonResponse  (response: any)  {
            if (response.status === 200) {
                return response.data;
            } else if (response.status === 401) {
                dispatch(showRelogin());
                return response.data;
            } else {
                sessionStorage.setItem("message", response.data.message);
                dispatch(showErrorDialog());
                return response.data;
            }
        }
    }
}