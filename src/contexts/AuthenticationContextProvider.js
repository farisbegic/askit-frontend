import React, {createContext, useEffect, useState} from 'react';
import authentication from "../services/authentication";
import API from "../axios";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [rejected, setRejected] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const fetchAccessToken = async () => {
        try {
            const response = await authentication.getAccessToken()
            if (response.status === 200) {
                setId(response.data.id);
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

    API.interceptors.request.use(
        function (config) {
            if (accessToken) {
                config.headers["Authorization"] = `Bearer ${accessToken}`;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return (
        <AuthenticationContext.Provider value={{accessToken, setAccessToken, name, setName, rejected, setRejected, id, setId, logout}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;