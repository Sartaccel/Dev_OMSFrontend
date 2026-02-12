import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserRowProps {
  user: any;
}

const UserRow = ({ user }: UserRowProps) => {
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate();

  return (
    <>
    
      <td className="px-4 py-3">
        <img
          src={user.img}
          className="w-9 h-9 rounded-md object-cover"
          alt=""
        />
      </td>

     
      <td className="px-4 py-3 font-medium text-blue-600">
        {user.name}
      </td>

     
      <td className="px-4 py-3">{user.role}</td>

    
      <td className="px-4 py-3">{user.username}</td>

      
      <td className="px-4 py-3">{user.mobile}</td>

      
      <td className="px-4 py-3">{user.email}</td>

     
      <td className="px-4 py-3 text-center font-medium text-green-600">
        Active
      </td>

      
      <td className="px-4 py-3 text-center relative">

        
        <button
          onClick={() => setOpen(!open)}
          className="
            text-xl font-bold text-gray-600
            hover:text-gray-800
            w-8 h-8
            rounded-full
            hover:bg-gray-100
          "
        >
          ⋮
        </button>

      
        {open && (
          <div
            className="
              absolute right-2 top-10 z-30
              bg-white border rounded-md shadow-lg
              w-32
            "
          >
            <button
              onClick={() => navigate(`/users/edit/${user.id}`)}
              className="
                block w-full text-left
                px-4 py-2 text-sm
                hover:bg-gray-100
              "
            >
              Edit
            </button>

           
          </div>
        )}

      </td>
    </>
  );
};

export default UserRow;
