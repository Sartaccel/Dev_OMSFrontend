
import * as yup from "yup";

import Input from "../../components/form/input";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import Button from "../../components/Button";
import Toggle from "../../components/form/Toggle";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  nameRule,
  emailRule,
  passwordRule,
  usernameRule,
  mobileRule,
} from "../../validations/commonRules";

/* ===================================
   VALIDATION SCHEMA
=================================== */

const userSchema = yup.object().shape({
  name: nameRule,

  username: usernameRule,

  email: emailRule,

  password: passwordRule,

  mobile: mobileRule,

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  role: yup.string().required("Role is required"),
});

/* ===================================
   COMPONENT
=================================== */

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

  const [errors, setErrors] = useState<any>({});

  /* ===================================
     LOAD EDIT DATA
  =================================== */

  useEffect(() => {
    if (isEditMode) {
      const userData = {
        name: "Madelyn Philips",
        username: "madelyn123",
        mobile: "9087654323",
        email: "madelyn@sart.com",
        role: "Manager",
      };

      setFormData((prev) => ({
        ...prev,
        ...userData,
      }));

      setIsActive(true);
    }
  }, [id, isEditMode]);

  /* ===================================
     HANDLE CHANGE
  =================================== */

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    try {
      await userSchema.validateAt(name, {
        ...formData,
        [name]: value,
      });

      setErrors((prev: any) => ({
        ...prev,
        [name]: "",
      }));
    } catch (err: any) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: err.message,
      }));
    }
  };

  /* ===================================
     SUBMIT
  =================================== */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await userSchema.validate(formData, {
        abortEarly: false,
      });

      setErrors({});

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
    } catch (err: any) {
      const validationErrors: any = {};

      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });

      setErrors(validationErrors);
    }
  };

  /* ===================================
     UI
  =================================== */

  return (
    <div className="min-h-screen font-app px-2 sm:px-4">
      <div className="bg-white rounded-lg max-w-7xl w-full mx-auto p-4 sm:p-6">

        {/* HEADER */}

        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-700 mb-6 font-medium">
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

        {/* DIVIDER */}

        <div className="border-t border-blue-200 -mt-4 mb-4 -mx-4 sm:-mx-6"></div>

        <h2 className="text-base font-semibold mb-3">
          Photo & Details
        </h2>

        {/* FORM */}

        <form onSubmit={handleSubmit} className="w-full">

          {/* RESPONSIVE GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-[650px] w-full">

            {/* NAME */}

            <Input
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              error={errors.name}
            />

            {/* USERNAME */}

            <Input
              label="Username *"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              error={errors.username}
            />

            {/* MOBILE */}

            <Input
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              error={errors.mobile}
            />

            {/* EMAIL */}

            <Input
              label="Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              error={errors.email}
            />

            {/* PASSWORD */}

            <Input
              label="Password *"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              error={errors.password}
            />

            {/* CONFIRM PASSWORD */}

            <Input
              label="Confirm Password *"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              error={errors.confirmPassword}
            />

            {/* ROLE */}

            <div className="w-full">

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
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>

              {errors.role && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.role}
                </p>
              )}

            </div>

            {/* ACTIVE */}

            <div className="flex items-center gap-4 mt-4 sm:mt-6">

              <Toggle
                label="Is Active?"
                checked={isActive}
                onChange={setIsActive}
              />

            </div>

          </div>

          {/* BUTTON */}

          <div className="mt-8 sm:mt-10 w-full sm:w-auto">

            <Button
              label={isEditMode ? "Update" : "Save"}
              type="submit"
              className="w-full sm:w-auto"
            />

          </div>

        </form>

      </div>
    </div>
  );
};

export default NewUser;
