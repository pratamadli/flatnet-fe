import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

const Image = (props: NextImageProps) => {
  return <NextImage {...props} />;
};

export { Image };
