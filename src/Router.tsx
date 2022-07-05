import { Routes, Route } from "react-router-dom";
import {Home } from './pages/Home'
import {NewSheduling } from './pages/NewSheduling'
import {Auth } from './pages/Auth'
import { PageConstruction } from "./pages/PageConstruction";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsheduling" element={<NewSheduling />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pageconstruction" element={<PageConstruction />} />

        </Routes>
    );
}
