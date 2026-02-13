import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Task/Tasklist";
import Newtasks from "../pages/Task/Newtasks";
import Clients from "../pages/Clients";
import Users from "../pages/User/UserList";
import NewUser from "../pages/User/NewUser";

import ProtectedRoute from './ProtectedRoute'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="newtasks" element={<Newtasks />} />
            <Route path="tasks/:id/edit" element={<Newtasks />} />
            <Route path="clients" element={<Clients />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<NewUser />} />
            <Route path="users/edit/:id" element={<NewUser />} />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

