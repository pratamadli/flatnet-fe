import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Input = ({
  id,
  placeholder,
  type = "text",
  value = "",
  onChange,
  className = "",
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
      className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 ${className}`}
    />
  );
};

export default Input;
