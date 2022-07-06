import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scheduling from "./pages/Scheduling";
import NewScheduling from "./pages/NewScheduling";
import InDevelopment from "./pages/InDevelopment";
import UpdateScheduling from "./pages/UpdateScheduling";
import Login from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/scheduling/:id" element={<Scheduling />} />
      <Route path="/newscheduling" element={<NewScheduling />} />
      <Route path="/indevelopment" element={<InDevelopment />} />
      <Route path="/scheduling/update/:id" element={<UpdateScheduling />} />
    </Routes>
  );
}
