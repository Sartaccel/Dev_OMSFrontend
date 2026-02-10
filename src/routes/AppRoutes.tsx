import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Newtasks from "../pages/Newtasks";
import Clients from "../pages/Clients";
import Users from "../pages/User/UserList";
import NewUser from "../pages/User/NewUser";
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
          <Route path="clients" element={<Clients />} />
           <Route path="users" element={<Users />} />
            <Route path="users/add" element={<NewUser />} />
            <Route path="users/edit/:id" element={<NewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
