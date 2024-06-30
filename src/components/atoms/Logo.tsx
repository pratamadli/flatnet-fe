import React from "react";
import NextImage from "next/image";
import LogoImage from "@/public/logo-removebg.png";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  fontStyle?: string;
}

const Logo = ({ className = "", width, height, fontStyle }: LogoProps) => {
  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <NextImage
        src={LogoImage}
        alt="Logo Flatnet"
        width={width}
        height={height}
        className={className}
      />
    </span>
  );
};

export { Logo };
