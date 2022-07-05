import { Routes, Route } from "react-router-dom";
import {Home } from './pages/Home'
import {NewSheduling } from './pages/NewSheduling'
import {Auth } from './pages/Auth'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsheduling" element={<NewSheduling />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    );
}
