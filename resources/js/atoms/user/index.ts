import { atom } from "recoil";

import { TUserAtom } from "./types";

export default atom<TUserAtom>({
    key: "userAtom",
    default: null,
});
