import { Select } from "@/components/atoms";
import { BaseMenu } from "@/components/layouts";
import React, { useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

const UserForm = () => {
  const options: SelectOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const handleSelectChange = (option: SelectOption | null) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  return (
    <div>
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Choose an option"
      />{" "}
    </div>
  );
};

UserForm.getLayout = (page: React.ReactNode) => (
  <BaseMenu title="User Form">{page}</BaseMenu>
);

export default UserForm;
