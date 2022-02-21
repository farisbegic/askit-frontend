import React, {useContext} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";

// Route used to restrict access to unauthorized users
const ProtectedRoute = () => {
    const { accessToken } = useContext(AuthenticationContext)
    return accessToken ? <Outlet /> : <Navigate to="/login"/>
};

export default ProtectedRoute;