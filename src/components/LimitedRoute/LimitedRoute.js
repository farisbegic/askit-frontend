import React, {useContext} from 'react';
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";
import {Navigate, Outlet} from "react-router-dom";

const LimitedRoute = () => {
    const { rejected } = useContext(AuthenticationContext)
    return rejected ? <Outlet /> : <Navigate to="/"/>
};

export default LimitedRoute;