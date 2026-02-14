import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionMenu from"../form/ActionMenu";

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

      
       <td className="px-4 py-3 text-center">
        <ActionMenu
          id={user.id}
          basePath="users"
        
        />
      </td>

        
      
    </>
  );
};

export default UserRow;
