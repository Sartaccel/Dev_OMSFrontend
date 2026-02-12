import { NavLink } from "react-router-dom";

// Icons
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTask } from "react-icons/gr";
import { MdAddTask } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiUserCircleLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Headphones } from "lucide-react";

const menuClass =
  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#eef3f7] border-r border-gray-200 p-3">
      
      {/* Rounded Container */}
      <div className="h-full bg-white/60 rounded-2xl p-3 flex flex-col">

        {/* Menu Items */}
        <nav className="space-y-2">
          
          {/* Dashboard */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <LuLayoutDashboard className="text-[20px]" />
            Dashboard
          </NavLink>

          {/* Task */}
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <GrTask className="text-[20px]" />
            Task
          </NavLink>

          {/* To-Do */}
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <MdAddTask className="text-[20px]" />
            To-Do
          </NavLink>

          {/* Customers */}
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <TbUsers className="text-[20px]" />
            Customers
          </NavLink>

          {/* Finance */}
          <NavLink
            to="/finance"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <BsGraphUpArrow className="text-[20px]" />
            Finance
          </NavLink>

          {/* Reports */}
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <HiOutlineDocumentReport className="text-[20px]" />
            Reports
          </NavLink>

          {/* Users */}
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${menuClass} ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <PiUserCircleLight className="text-[20px]" />
            Users
          </NavLink>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto pt-6 border-t border-gray-200 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100">
            <IoSettingsOutline className="text-[20px]" />
            Settings
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg text-gray-700 hover:bg-gray-100">
            <Headphones className="w-5 h-5" />
            Support
          </button>
        </div>

      </div>
    </aside>
  );
}
