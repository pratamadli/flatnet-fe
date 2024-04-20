// form.tsx

import React from "react";

interface Props {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}

const FormInput: React.FC<Props> = ({
  label,
  id,
  placeholder,
  type = "text",
  autoComplete = "off",
  required = false,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          placeholder={placeholder}
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
    </div>
  );
};

export default FormInput;
