import React from 'react';

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Section = ({ title, description, children }: SectionProps) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      {title && <h2 className="text-3xl font-bold text-center">{title}</h2>}
      {description && <p className="mt-4 text-center text-gray-600">{description}</p>}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export { Section };
