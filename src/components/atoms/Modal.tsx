import colors from "@/styles/colors";
import React from "react";

// Modal component
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  size = "md",
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`bg-white rounded-md shadow-lg overflow-hidden ${sizeClasses[size]} w-full z-10`}
      >
        {children}
      </div>
    </div>
  );
};

// ModalHeader component
interface ModalHeaderProps {
  title: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  className?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  showCloseButton = false,
  onClose,
  className = "",
}) => {
  return (
    <div
      className={`flex justify-between items-center border-b p-4 ${className}`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      {showCloseButton && (
        <button onClick={onClose} style={{ color: colors.midgray }}>
          X
        </button>
      )}
    </div>
  );
};

// ModalBody component
interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// ModalFooter component
interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = "",
}) => {
  return <div className={`border-t p-4 ${className}`}>{children}</div>;
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
