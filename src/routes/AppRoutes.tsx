import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Task/Tasklist";
import Newtasks from "../pages/Task/Newtasks";
import AddCustomer from "../pages/AddCustomer";
// import Edittask from "../pages/Task/Edittask";
import Clients from "../pages/Clients";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected layout routes */}
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="newtasks" element={<Newtasks />} />
          <Route path="tasks/:id/edit" element={<Newtasks />} />
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="clients" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
