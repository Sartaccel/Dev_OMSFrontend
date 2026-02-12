import Input from "../../components/form/input";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import Button from "../../components/Button";
import Toggle from "../../components/form/Toggle";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NewUser = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const isEditMode = Boolean(id);

  const [isActive, setIsActive] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  
  useEffect(() => {
    if (isEditMode) {
      
      const userData = {
        name: "Madelyn Philips",
        username: "madelynphilips@sart.com",
        mobile: "9087654323",
        email: "madelynphilips@sart.com",
        role: "Manager",
      };

      setFormData((prev) => ({
        ...prev,
        ...userData,
      }));

      setIsActive(true);
    }
  }, [id, isEditMode]);

 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditMode) {
      console.log("Update User:", {
        ...formData,
        isActive,
        id,
      });

    } else {
      console.log("Create User:", {
        ...formData,
        isActive,
      });

      
    }

    navigate("/users");
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="bg-white rounded-lg max-w-[2200px] mx-auto p-6">

       
        <div className="flex items-center gap-2 text-base text-gray-700 mb-6 font-medium">

          <img
            src={ArrowLeft}
            alt="Back"
            onClick={() => navigate("/users")}
            className="w-5 h-5 cursor-pointer"
          />

          <span className="font-semibold">Users</span>

          <span className="text-gray-500">&gt;</span>

          <span className="font-bold text-gray-600">
            {isEditMode ? "Edit User" : "New User"}
          </span>

        </div>

       
        <div className="border-t border-blue-200 -mt-4 mb-4 -mx-6"></div>

        <h2 className="text-base font-semibold mb-3">
          Photo & Details
        </h2>

        <div className="flex flex-col gap-4">

         
          <div className="flex justify-start mb-3">

            <label
              htmlFor="photoUpload"
              className="
                w-[120px] h-[120px]
                bg-blue-50
                border border-blue-200
                rounded-xl
                shadow-sm
                flex flex-col
                items-center
                justify-center
                cursor-pointer
                hover:shadow-md
                transition
              "
            >

             
              <svg
                className="w-8 h-8 mb-2 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M20 16.5a4.5 4.5 0 00-1.9-8.6A6 6 0 006.2 9.2" />
                <path d="M6 16.5a4.5 4.5 0 01.2-9" />
                <path d="M12 12v7" />
                <path d="M9 9l3-3 3 3" />
              </svg>

              <span className="text-sm text-gray-800 font-medium text-center">
                Upload<br />photo
              </span>

              <input
                type="file"
                id="photoUpload"
                accept="image/*"
                hidden
              />

            </label>

          </div>

          
          <form onSubmit={handleSubmit} className="w-full">

           
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[650px]">

              <Input
                label="Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />

              <Input
                label="Username *"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />

              <Input
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
              />

              <Input
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />

              <Input
                label="Password *"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />

              <Input
                label="Confirm Password *"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />

           
              <div>

                <label className="block text-sm font-medium mb-1">
                  Role *
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="
                    w-full h-[46px]
                    border border-gray-300
                    rounded-md
                    px-3
                    bg-gray-50
                    text-sm
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-500
                  "
                >
                  <option value="">Select Role</option>
                  
                </select>

                <p className="text-xs text-gray-400 mt-2 flex gap-1">
                  To create custom user roles go to setting
                  <span className="text-blue-600 cursor-pointer hover:underline font-medium">
                    User Roles
                  </span>
                </p>

              </div>

              <div className="flex items-center gap-4 mt-6">

                <Toggle
                  label="Is Active?"
                  checked={isActive}
                  onChange={setIsActive}
                />

              </div>

            </div>

           
            <div className="mt-10">

              <Button
                label={isEditMode ? "Update" : "Save"}
                type="submit"
              />

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default NewUser;

