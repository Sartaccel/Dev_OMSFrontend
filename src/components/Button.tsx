import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-600
        text-white
        px-12
        py-2.5
        rounded-md
        text-sm
        font-medium
        transition
        hover:bg-blue-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
