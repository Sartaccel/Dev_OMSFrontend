import React from "react";

interface ToggleProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  checked = true,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex items-center gap-4">

      {label && (
        <span className="text-sm font-medium ml-4">
          {label}
        </span>
      )}

      <label className="relative inline-flex items-center cursor-pointer">

        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />

        <div
          className={`
            w-11 h-6
            rounded-full
            transition
            after:content-['']
            after:absolute
            after:top-[2px]
            after:left-[2px]
            after:h-5
            after:w-5
            after:bg-white
            after:rounded-full
            after:transition
            peer-checked:after:translate-x-full

            ${disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-300 peer-checked:bg-green-500"}
          `}
        />
      </label>

    </div>
  );
};

export default Toggle;
