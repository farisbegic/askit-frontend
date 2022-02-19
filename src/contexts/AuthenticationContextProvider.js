import React, {createContext, useEffect, useState} from 'react';
import authentication from "../services/authentication";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [accessToken, setAccessToken] = useState("");
    const [rejected, setRejected] = useState(false);
    const [name, setName] = useState("");

    const fetchAccessToken = async () => {
        try {
            const response = await authentication.getAccessToken()
            if (response.status === 200) {
                setAccessToken(response.data.accessToken)
                setName(response.data.name)
            }
        } catch (err) {
            setRejected(true)
        }
    }

    const logout = async () => {
        const response = await authentication.logout();
        if (response.status === 200) {
            setAccessToken("")
            setName("")
            setRejected(true)
        }
    }

    useEffect(() => {
        if (!accessToken) {
            fetchAccessToken()
        }
    }, [accessToken])

    return (
        <AuthenticationContext.Provider value={{accessToken, setAccessToken, name, setName, rejected, setRejected, logout}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;