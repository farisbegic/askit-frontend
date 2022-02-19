import { render } from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);