import colors from "@/styles/colors";
import React from "react";
import { Label } from "./Label";

interface CardHeaderProps {
  title: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  showCloseButton = false,
  onClose,
  className = "",
}) => {
  return (
    <div
      className={`flex justify-between items-center border-b pb-2 mb-4 ${className}`}
    >
      <Label className="text-lg font-medium" color={colors.black}>
        {title}
      </Label>
      {showCloseButton && (
        <button onClick={onClose} className="text-red-500">
          X
        </button>
      )}
    </div>
  );
};

export { CardHeader };
