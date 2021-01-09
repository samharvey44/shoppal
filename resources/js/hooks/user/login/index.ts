import { useSetRecoilState } from "recoil";
import { useSnackbar } from "notistack";

import userAtom from "../../../atoms/user";
import api from "../../../services/api";
import useLogoutUser from "../logout";

export default () => {
    const setUser = useSetRecoilState(userAtom);
    const { enqueueSnackbar } = useSnackbar();
    const logout = useLogoutUser();

    return (cb: (success: boolean) => void = () => null) =>
        api
            .get("/me")
            .then(({ data: { data } }) => {
                setUser(data);

                cb(true);
            })
            .catch((e) => {
                enqueueSnackbar("An error occured while authenticating!", {
                    variant: "error",
                });

                // Log the authorised user out if this request fails with a 403.
                // This could happen if they're using an expired token cached in
                // local storage.
                if (e && e.response && e.response.status === 403) {
                    logout();
                }

                cb(false);
            });
};
