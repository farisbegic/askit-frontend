import React, {useContext} from 'react';
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {Navigate, Outlet} from "react-router-dom";

// Route used to restrict logged users (Login, Register)
const LimitedRoute = () => {
    const { rejected } = useContext(AuthenticationContext)
    return rejected ? <Outlet /> : <Navigate to="/"/>
};

export default LimitedRoute;