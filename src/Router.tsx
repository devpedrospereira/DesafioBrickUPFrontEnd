import { Routes, Route } from "react-router-dom";
import {Home } from './pages/Home'
import {NewSheduling } from './pages/NewSheduling'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsheduling" element={<NewSheduling />} />
        </Routes>
    );
}
