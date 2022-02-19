import React, {useContext} from 'react';
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {Navigate, Outlet} from "react-router-dom";

// Route used to restrict access to unauthorized users
const ProtectedRoute = () => {
    const { rejected } = useContext(AuthenticationContext)
    return !rejected ? <Outlet /> : <Navigate to="/login"/>
};

export default ProtectedRoute;