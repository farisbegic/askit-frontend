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
import EditProfile from "./pages/EditProfile";
import EditPassword from "./pages/EditPassword";
import MyQuestions from "./pages/MyQuestions";
import Question from "./pages/Question";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient()

render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AuthenticationContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/question/:id" element={<Question />}/>
                    <Route element={<LimitedRoute />}>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/login" element={<Login />}/>
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/profile" element={<Profile />}/>
                        <Route path="/edit-profile" element={<EditProfile />}/>
                        <Route path="/edit-password" element={<EditPassword />}/>
                        <Route path="/my-questions" element={<MyQuestions />}/>
                    </Route>
                </Routes>
            </AuthenticationContextProvider>
        </BrowserRouter>
    </QueryClientProvider>,
    rootElement
);