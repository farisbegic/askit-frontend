import { render } from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import Header from "./components/Header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";

import AuthenticationContextProvider from "./contexts/AuthenticationContextProvider";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LimitedRoute from "./components/LimitedRoute/LimitedRoute";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient()

render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AuthenticationContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<LimitedRoute />}>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/login" element={<Login />}/>
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/profile" element={<Profile />}/>
                    </Route>
                </Routes>
            </AuthenticationContextProvider>
        </BrowserRouter>
    </QueryClientProvider>,
    rootElement
);