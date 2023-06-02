import {useContext} from "react";
import AuthContext from "./providerAuth";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;
