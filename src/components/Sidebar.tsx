import { NavLink, useNavigate } from "react-router-dom";

const menuClass =
  "flex items-center gap-3 px-4 py-2 rounded-lg text-sm";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user auth tokens/data from localStorage (or anywhere you keep)
    localStorage.removeItem("authToken");

    // Redirect to login page or homepage
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <span className="text-xl font-semibold text-primary">OMS</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-primaryLight text-primary font-medium"
                : "text-textSecondary hover:bg-primaryLight hover:text-primary"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-primaryLight text-primary font-medium"
                : "text-textSecondary hover:bg-primaryLight hover:text-primary"
            }`
          }
        >
          Tasks
        </NavLink>

        <NavLink
          to="/clients"
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-primaryLight text-primary font-medium"
                : "text-textSecondary hover:bg-primaryLight hover:text-primary"
            }`
          }
        >
          Clients
        </NavLink>
      </nav>

      {/* Bottom - Settings and Logout */}
      <div className="px-4 py-4 border-t border-border mt-auto space-y-2">
        <button className="w-full text-left px-4 py-2 text-sm rounded-lg text-textSecondary hover:bg-primaryLight hover:text-primary">
          Settings
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm rounded-lg text-textSecondary hover:bg-primaryLight hover:text-primary"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
