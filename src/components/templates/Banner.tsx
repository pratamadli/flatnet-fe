import React from 'react';
import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/organisms/Section';

const Banner = () => (
  <Section>
    <div className="text-center">
      <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p className="mt-4 text-gray-600">Start your Free Trial.</p>
      <Button href="https://creativedesignsguru.com/category/nextjs/">Get Started</Button>
    </div>
  </Section>
);

export { Banner };
