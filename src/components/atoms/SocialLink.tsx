import React from "react";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => (
  <a target="_blank" className="mx-2" href={`/${href}`}>
    {children}
  </a>
);

export { SocialLink };
