import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scheduling from "./pages/Scheduling";
import NewScheduling from "./pages/NewScheduling";
import InDevelopment from "./pages/InDevelopment";
import Login from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/newscheduling" element={<NewScheduling />} />
      <Route path="/scheduling/:id" element={<Scheduling />} />
      <Route path="/" element={<Login />} />
      <Route path="/indevelopment" element={<InDevelopment />} />
    </Routes>
  );
}
