import React, { useState, useEffect } from "react";

import useLoginUser from "../../../hooks/user/login";
import { cupboard } from "../../../config/globals";
import { IProps } from "./interfaces";

const AuthGate: React.FC<IProps> = ({ children }) => {
    const [ready, setReady] = useState(false);
    const login = useLoginUser();

    useEffect(() => {
        if (cupboard.get(cupboard.KEYS.AUTH) !== null) {
            login(() => setReady(true));
        } else {
            setReady(true);
        }
    }, []);

    return children(ready);
};

export default AuthGate;
