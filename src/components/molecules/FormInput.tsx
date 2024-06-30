import React from "react";
import { Label, Input } from "../atoms";

interface Props {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}

const FormInput: React.FC<Props> = ({
  label,
  id,
  placeholder,
  type = "text",
  autoComplete = "off",
  required = false,
  value = "",
  onChange = () => {},
  error = false,
  errorMessage = "",
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </Label>
      </div>
      <div className="mt-2">
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2 ${
            error
              ? "ring-red-500 focus:ring-red-500"
              : "ring-gray-300 focus:ring-indigo-600"
          }`}
        />
        {error && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default FormInput;
