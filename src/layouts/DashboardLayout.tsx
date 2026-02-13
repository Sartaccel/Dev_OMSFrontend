import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Top Header (FULL WIDTH) */}
      <Header />

      {/* Body Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;
