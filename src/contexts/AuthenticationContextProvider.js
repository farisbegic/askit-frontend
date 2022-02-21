import React, {createContext, useEffect, useState} from 'react';
import authentication from "../services/authentication";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [id, setId] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const fetchAccessToken = async () => {
        try {
            const response = await authentication.getAccessToken()
            if (response.status === 200) {
                setResponse(response);
            }
        } catch (err) {
            throw err;
        }
    }

    const setResponse = (response) => {
        localStorage.setItem("id", response.data.id)
        localStorage.setItem("accessToken", response.data.accessToken)
        setId(response.data.id)
        setAccessToken(response.data.accessToken)
    }

    const logout = async () => {
        const response = await authentication.logout();
        if (response.status === 200) {
            localStorage.removeItem("id")
            localStorage.removeItem("accessToken")
            setId("")
            setAccessToken("")
        }
    }

    // Generate new access token every 10 minutes

    setInterval(async () => {
        await fetchAccessToken();
    }, 600000)

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setAccessToken(localStorage.getItem("accessToken"))
    }, [])


    return (
        <AuthenticationContext.Provider value={{setId, id, setAccessToken, accessToken, logout, setResponse}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;