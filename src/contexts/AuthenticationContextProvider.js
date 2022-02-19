import React, {createContext, useEffect, useState} from 'react';
import authentication from "../services/authentication";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [accessToken, setAccessToken] = useState("");

    const fetchAccessToken = async () => {
        const response = await authentication.getAccessToken()
        setAccessToken(response.data.accessToken)
    }

    useEffect(() => {
        if (!accessToken) {
            fetchAccessToken()
        }
    }, [accessToken])

    return (
        <AuthenticationContext.Provider value={{accessToken}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;