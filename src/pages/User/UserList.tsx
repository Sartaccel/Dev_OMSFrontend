import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/images/Search.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import plusIcon from "../../assets/images/plus.svg";

import DataTable, { type Column } from "../../components/table/DataTable";
import UserRow from "../../components/table/UserRow";


const users = [
  {
    id: 1,
    name: "Madelyn Philips",
    role: "Manager",
    username: "madelynphilips@sart.com",
    mobile: "9087654323",
    email: "madelynphilips@sart.com",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Jocelyn Workman",
    role: "Associate",
    username: "jocelynworkman@sart.com",
    mobile: "9087654323",
    email: "jocelynworkman@sart.com",
    img: "https://i.pravatar.cc/40?img=2",
  },
];

export default function UsersList() {
  const navigate = useNavigate();


  const columns: Column[] = [
    { key: "photo", label: "Photo" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "username", label: "Username" },
    { key: "mobile", label: "Mobile" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status", align: "center" },
     { key: "action", label: "Action" },
  ];

  return (
    <div>
      <div className="bg-white border border-blue-100 rounded-md">

    
        <div className="flex items-center gap-3 px-4 py-3 border-b border-blue-100">
          <img
            src={ArrowLeft}
            alt="Back"
            className="w-5 h-5 cursor-pointer"
          />

          <h2 className="text-base font-medium text-gray-800">
            Users
          </h2>
        </div>

      
        <div className="flex items-center justify-between px-4 py-3">

          <div className="flex items-center gap-4">

            <h3 className="text-base font-medium text-gray-700">
              Users Details
            </h3>

            
            <div className="relative w-60">
              <input
                type="text"
                placeholder="Search users"
                className="
                  w-full border border-blue-200 rounded-full
                  pl-4 pr-10 py-2 text-sm outline-none
                  focus:ring-1 focus:ring-blue-400
                "
              />

              <img
                src={searchIcon}
                alt="search"
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>

          </div>

          {/* Add */}
          <button
            onClick={() => navigate("/users/add")}
            className="
              bg-blue-600 text-white px-6 py-2 rounded-md
              text-sm flex items-center gap-2
            "
          >
            <img src={plusIcon} className="w-4 h-4" />
            Add
          </button>

        </div>

      
        <DataTable
          columns={columns}
          data={users}
          renderRow={(user) => <UserRow user={user} />}
        />

      </div>
    </div>
  );
}
