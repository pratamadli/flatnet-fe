import React from "react";
import colors from "@/styles/colors";
const Divider = () => {
  return (
    <hr
      className="my-4 "
      style={{ backgroundColor: colors.darkgray, color: colors.darkgray }}
    />
  );
};

export { Divider };
