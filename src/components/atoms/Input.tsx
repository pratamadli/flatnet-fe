import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  autoComplete = "off",
  required = false,
  value = "",
  onChange = () => {},
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
    />
  );
};

export { Input };
