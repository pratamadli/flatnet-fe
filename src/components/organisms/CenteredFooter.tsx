import React from 'react';
import { SocialLink } from '@/components/atoms/SocialLink';

interface CenteredFooterProps {
  logo: React.ReactNode;
  iconList: React.ReactNode;
  children: React.ReactNode;
}

const CenteredFooter = ({ logo, iconList, children }: CenteredFooterProps) => (
  <footer className="bg-gray-100 py-8">
    <div className="container mx-auto text-center">
      <div className="flex justify-center mb-4">{logo}</div>
      <ul className="flex justify-center mb-4 space-x-6">{children}</ul>
      <div className="flex justify-center space-x-4">{iconList}</div>
    </div>
  </footer>
);

export { CenteredFooter };
