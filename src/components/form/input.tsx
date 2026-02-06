import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = ({ label, error, icon, type, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      {/* Input box */}
    <div
  className={`relative flex items-center border-[1.2px] border-[rgba(223,233,239,1)] border-[rgba(0,0,0,0.1)] rounded-[3px] h-[50px] px-4 bg-gray-50
  ${error ? "border-red-500" : "border-gray-300"}
  focus-within:ring-2 focus-within:ring-primaryBlue`}
>

        <input
          {...rest}
          type={isPassword && showPassword ? "text" : type}
          className="w-full outline-none text-sm bg-transparent"
        />

        {/* Right icon */}
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        ) : (
          icon && <span className="text-gray-400">{icon}</span>
        )}
      </div>

      {/* Error message – RIGHT SIDE */}
      {error && (
        <p className="text-red-500 text-xs mt-1 text-right">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
