import React from "react";

interface ButtonProps {
  label?: string; // optional now
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode; // 👈 IMPORTANT
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-500
         font-app
        text-white
        px-12
        py-2.5
        rounded-md
        text-sm
        font-medium
        transition
        hover:opacity-90
        focus:outline-none
        focus:ring-2
        focus:ring-primaryBlue
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      <div className="flex items-center gap-2 justify-center">
        {children}
        {label}
      </div>
    </button>
  );
};

export default Button;
