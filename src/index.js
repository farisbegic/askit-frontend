import { render } from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import Header from "./components/Header/Header";
import Register from "./pages/Register";
import {QueryClient, QueryClientProvider} from "react-query";
import AuthenticationContextProvider from "./contexts/AuthenticationContextProvider";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient()

render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AuthenticationContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </AuthenticationContextProvider>
        </BrowserRouter>
    </QueryClientProvider>,
    rootElement
);