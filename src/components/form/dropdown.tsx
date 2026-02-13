import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

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
        className={`relative flex items-center border-[1.2px] rounded-[3px] h-[50px] px-0 bg-[#F0F7FC]
  ${error ? "border-red-500" : "border-[#DFE9EF]"}
  focus-within:border-[#DFE9EF]
  focus-within:ring-1 focus-within:ring-[#DFE9EF]
`}
      >
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full h-full outline-none text-sm bg-transparent appearance-none cursor-pointer px-4 pr-8 box-border
            ${value === "" ? "text-[#99A4AC]" : "text-[#151515]"}
          `}
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
        <span className="pointer-events-none text-[#151515] absolute right-6">
          <IoIosArrowDown size={22} />
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
