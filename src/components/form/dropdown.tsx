import { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, error }) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>


      <div
        className={`relative flex items-center border-[1.2px] rounded-[3px] h-[50px] px-0 bg-gray-50
  ${error ? "border-red-500" : "border-[rgba(223,233,239,1)]"}
  focus-within:ring-1 focus-within:ring-blue-300
`}
      >
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-full outline-none text-sm bg-transparent appearance-none cursor-pointer px-4 pr-8 box-border"
        >

          <option value="" disabled>
            Select
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <span className="pointer-events-none text-gray-400 absolute right-4">
          ▼
        </span>
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

export default Dropdown;
