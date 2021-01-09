import { useHistory } from "react-router-dom";
import { useResetRecoilState } from "recoil";

import { cupboard } from "../../../config/globals";
import { EPages } from "../../../pages/enums";
import userAtom from "../../../atoms/user";
import api from "../../../services/api";

export default () => {
    const clearUser = useResetRecoilState(userAtom);
    const history = useHistory();

    return () => {
        api.post("/me/logout")
            .catch(() => {})
            .then(() => {
                // We have to wait until we know we've sent this request
                // because it needs the token in the cupboard in order to
                // authenticate the logout request. Once we know the request
                // has been sent, we can clear the cupboard. This request
                // isn't hugely important, it just rejects the token from
                // being used in the future, therefore we can perform any
                // logic outside of this promise without caring about the
                // response. That makes the app much more responsive.
                cupboard.set(cupboard.KEYS.AUTH, null);
            });

        clearUser();

        history.push(EPages.Login);
    };
};
