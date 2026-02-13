import { Bell, ChevronDown, Search,Menu } from "lucide-react";
import Logo from "../assets/logo icon.svg";
import { useAppDispatch } from "@/app/hooks";
import { toggleSidebar } from "@/features/sidebar/sidebarSlice";

const Header = () => {
   const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b bg-white flex items-center px-3 sm:px-6">

      {/* Mobile Toggle*/}
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="md:hidden p-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button> 

      {/* LEFT — Logo */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-fit sm:min-w-[220px]">
        <img
          src={Logo}
          alt="OMS Logo"
          className="h-7 sm:h-8 w-auto object-contain"
        />

        <span className="text-base sm:text-lg font-semibold text-gray-800">
          OMS
        </span>
      </div>

      {/* CENTER — Company Name (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 justify-center">
        <span className="text-sm font-medium text-gray-600">
          JM CORPORATE SERVICES LLP
        </span>
      </div>

      {/* RIGHT — Search + Actions */}
      <div className="flex items-center gap-2 sm:gap-5 ml-auto">

        {/* Search (hidden on mobile, shown from md) */}
        <div className="hidden md:block relative w-48 lg:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Clients"
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-full focus:outline-none"
          />
        </div>

        {/* Notification */}
        <button className="relative text-gray-600 hover:text-gray-800 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium text-gray-800">
              Manish
            </span>
            <span className="text-xs text-gray-500">
              UI/UX Designer
            </span>
          </div>

          <ChevronDown className="hidden sm:block w-4 h-4 text-gray-500" />
        </div>

      </div>
    </header>
  );
};

export default Header;
