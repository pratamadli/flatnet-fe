import React from 'react';
import { CustomImage } from '@/components/atoms/Image';

interface VerticalFeatureRowProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const VerticalFeatureRow = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: VerticalFeatureRowProps) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2">
      <CustomImage src={image} alt={imageAlt} width={500} height={400} />
    </div>
    <div className="md:w-1/2 flex flex-col justify-center px-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

export { VerticalFeatureRow };
