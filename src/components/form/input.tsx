import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: "default" | "login";
}

const Input = ({
  label,
  error,
  icon,
  type,
  variant = "default",
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700">
          {label}
        </label>
      )}

      {/* Input Box */}
      <div
        className={`
        relative flex items-center 
        border rounded-md
        h-[46px] px-3
        transition-all duration-150

        ${
          variant === "login"
            ? "bg-white border-gray-300"
            : "bg-[#F4F7FA] border-[#E2E8F0]"
        }

        ${error ? "border-red-500" : ""}
        focus-within:border-blue-500
        focus-within:ring-1 focus-within:ring-blue-500
      `}
      >
        {/* Input */}
        <input
          {...rest}
          type={isPassword && showPassword ? "text" : type}
          className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400"
        />

        {/* Right Icon / Password Toggle */}
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-400 hover:text-gray-600 flex items-center"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        ) : (
          icon && (
            <span className="ml-2 text-gray-400 flex items-center">
              {icon}
            </span>
          )
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-xs mt-1 text-right">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
