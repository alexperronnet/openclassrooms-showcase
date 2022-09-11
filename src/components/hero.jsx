import React from 'react';
import { Svg } from '~/components';

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 my-16 md:my-20 lg:my-24">
      <h1 className="sr-only">OpenClassrooms projects by Alex Perronnet</h1>
      <Svg name="oc-logo" className="h-5 md:h-6 lg:h-8" />
      <p className="text-teal-500 text-center text-sm md:text-base">
        Here is where I store all my projects I completed so far for{' '}
        <a className="font-bold hover:underline" href="https://openclassrooms.com/">
          OpenClassrooms
        </a>
      </p>
    </div>
  );
}
