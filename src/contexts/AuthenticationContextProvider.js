import React, {createContext, useEffect, useState} from 'react';
import authentication from "../services/authentication";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [accessToken, setAccessToken] = useState("");
    const [name, setName] = useState("");

    const fetchAccessToken = async () => {
        const response = await authentication.getAccessToken()
        if (response.status === 200) {
            setAccessToken(response.data.accessToken)
            setName(response.data.name)
        }
    }

    const logout = async () => {
        const response = await authentication.logout();
        if (response.status === 200) {
            setAccessToken("")
            setName("")
        }
    }

    useEffect(() => {
        if (!accessToken) {
            fetchAccessToken()
        }
    }, [accessToken])

    return (
        <AuthenticationContext.Provider value={{accessToken, setAccessToken, name, setName, logout}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;