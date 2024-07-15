import React from "react";
import { Label } from "./Label";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: SelectOption | null) => void;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  value?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  onChange,
  error = false,
  errorMessage = "",
  label = "Select Options",
  value,
}) => {
  console.log("OPTIONS TO SELECT", options);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("EVENT HANDLE CHANGE SELECT.TSX", event.target.value);
    const selectedValue = event.target.value;
    console.log("SELECTED VALUE", selectedValue);
    const selectedOption =
      options.find((option) => option.value.toString() === selectedValue) ||
      null;
    onChange(selectedOption);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </Label>
      </div>
      <div
        className={`relative inline-block text-left w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2 ${
          error
            ? "ring-red-500 focus:ring-red-500"
            : "ring-gray-300 focus:ring-indigo-600"
        }`}
      >
        <select
          onChange={(e) => handleChange(e)}
          value={value}
          className="w-full"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              <Label>{option.label}</Label>
            </option>
          ))}
        </select>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Select;
