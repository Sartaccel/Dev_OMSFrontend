import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  error,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>

      {/* Label */}
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700">
          {label}
        </label>
      )}

      {/* Field — EXACT SAME STYLE AS INPUT */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          relative flex items-center
          border rounded-md
          h-[46px] px-3
          transition-all duration-150
          bg-[#F4F7FA] border-[#E2E8F0]
          cursor-pointer
          ${error ? "border-red-500" : ""}
          ${open ? "border-blue-500 ring-1 ring-blue-500" : ""}
        `}
      >
        <span className="text-sm text-gray-700">
          {value || "Select"}
        </span>

        {/* Arrow */}
        <span
          className={`absolute right-3 text-gray-400 transition-transform ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </div>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute left-0 mt-1 w-full border border-gray-200 rounded-md bg-white shadow-lg z-50 overflow-hidden">

          <div
            onClick={() => {
              onChange?.("");
              setOpen(false);
            }}
            className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
          >
            Select
          </div>

          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange?.(opt);
                setOpen(false);
              }}
              className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-500 text-xs mt-1 text-right">
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
