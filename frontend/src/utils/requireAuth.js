import {useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({allowedRole}) => {
    const {auth} = useAuth();
    const location = useLocation();

    const isRoleAllowed = () => {
        if (!allowedRole) {
            return auth?.response;
        }
        return auth?.response && auth.response.role === allowedRole;
    };

    return isRoleAllowed() ? (
        <Outlet/>
    ) : (
        <Navigate to="/" state={{from: location}} replace/>
    );
};


export default RequireAuth;
