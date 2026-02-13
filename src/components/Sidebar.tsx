import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toggleSidebar } from "@/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

/* ===== Icons ===== */
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTask } from "react-icons/gr";
import { MdAddTask, MdMenu } from "react-icons/md";
import { TbUsers, TbLogout2 } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Headphones } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <aside
      className={`fixed md:sticky top-16 left-0 z-40 bg-[#EBF7FF] py-3 ps-3 transition-all duration-300
      h-[calc(100vh-4rem)]
      ${isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:w-20 md:translate-x-0"}`}
    >
      <div className="bg-white rounded-2xl p-3 flex flex-col h-full">

        {/* ===== Header ===== */}
        <div
          className={`flex items-center mb-3 sm:mb-4 px-1 ${
            isOpen ? "justify-between" : "justify-center"
          }`}
        >
          {isOpen && (
            <span className="font-semibold text-gray-700 text-sm">Menu</span>
          )}

          <button
            onClick={() => dispatch(toggleSidebar())}
            className="text-lg sm:text-xl text-gray-600 hover:text-black hover:bg-gray-100 p-1.5 sm:p-2 rounded-lg transition-colors"
            title={isOpen ? "Collapse menu" : "Expand menu"}
          >
            <MdMenu />
          </button>
        </div>

        {/* ===== Menu ===== */}
        <nav className={`${isOpen ? "space-y-1" : "space-y-1"}`}>

          <MenuItem
            to="/"
            icon={<LuLayoutDashboard className="text-[20px]" />}
            label="Dashboard"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

          <MenuItem
            to="/tasks"
            icon={<GrTask className="text-[20px]" />}
            label="Task"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

          <MenuItem
            to="/todo"
            icon={<MdAddTask className="text-[20px]" />}
            label="To-Do"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

          <MenuItem
            to="/customers"
            icon={<TbUsers className="text-[20px]" />}
            label="Customers"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

          <MenuItem
            to="/finance"
            icon={<BsGraphUpArrow className="text-[20px]" />}
            label="Finance"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

          <MenuItem
            to="/reports"
            icon={<HiOutlineDocumentReport className="text-[20px]" />}
            label="Reports"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

          <MenuItem
            to="/users"
            icon={<FaRegUser size={18} />}
            label="Users"
            pathname={location.pathname}
            navigate={navigate}
            isOpen={isOpen}
          />

        </nav>

        {/* ===== Bottom ===== */}
        <div className={`mt-auto pt-3 sm:pt-6 border-t border-gray-200 ${isOpen ? "space-y-1 sm:space-y-2" : "space-y-1"}`}>

          <div
            className={`w-full flex items-center text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-100 cursor-pointer
            ${isOpen ? "gap-3 px-4 py-3 justify-start" : "gap-0 px-3 py-3 justify-center"}`}
            title={!isOpen ? "Settings" : undefined}
          >
            <IoSettingsOutline className="text-[20px]" />
            {isOpen && "Settings"}
          </div>

          <div
            className={`w-full flex items-center text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-100 cursor-pointer
            ${isOpen ? "gap-3 px-4 py-3 justify-start" : "gap-0 px-3 py-3 justify-center"}`}
            title={!isOpen ? "Support" : undefined}
          >
            <Headphones className="w-5 h-5" />
            {isOpen && "Support"}
          </div>

          <div
            onClick={() => navigate("/login")}
            className={`w-full flex items-center text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-100 cursor-pointer
            ${isOpen ? "gap-3 px-4 py-3 justify-start" : "gap-0 px-3 py-3 justify-center"}`}
            title={!isOpen ? "Logout" : undefined}
          >
            <TbLogout2 className="text-[20px]" />
            {isOpen && "Logout"}
          </div>

        </div>
      </div>
    </aside>
  );
}

/* ================= MENU ITEM ================= */

interface MenuItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  navigate: (path: string) => void;
  isOpen: boolean;
}

function MenuItem({
  to,
  icon,
  label,
  pathname,
  navigate,
  isOpen,
}: MenuItemProps) {
  const isActive =
    pathname === to || pathname.startsWith(to + "/");

  return (
    <div
      onClick={() => navigate(to)}
      className={`flex items-center gap-3 rounded-lg text-sm transition-all cursor-pointer
      ${isOpen ? "px-4 py-3 justify-start" : "px-3 py-3 justify-center"}
      ${
        isActive
          ? "bg-blue-500 text-white shadow-md font-medium"
          : "text-gray-700 hover:bg-gray-100"
      }`}
      title={!isOpen ? label : undefined}
    >
      {icon}
      {isOpen && <span>{label}</span>}
    </div>
  );
}
