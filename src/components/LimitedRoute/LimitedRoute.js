import React, {useContext} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";

// Route used to restrict logged users (Login, Register)
const LimitedRoute = () => {
    const { accessToken } = useContext(AuthenticationContext)
    return !accessToken ? <Outlet /> : <Navigate to="/"/>
};

export default LimitedRoute;