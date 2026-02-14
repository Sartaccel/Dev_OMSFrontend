import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Task/Tasklist";
import Newtasks from "../pages/Task/Newtasks";
import Clients from "../pages/Clients";
import Users from "../pages/User/UserList";
import NewUser from "../pages/User/NewUser";

import ProtectedRoute from "./ProtectedRoute";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "@/features/Signup/Signup";
import GetOtp from "@/features/Signup/GetOtp";
import VerifyOtp from "@/features/Signup/VerifyOtp";
import Verified from "@/features/Signup/Verified";
import ForgotPassword from "@/features/Forgotpassword/ForgotPassword";
import ResetPassword from "@/features/Forgotpassword/ResetPassword";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<GetOtp/>} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/verified" element={<Verified/>} />
        

        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />

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
