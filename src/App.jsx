import React from 'react';
import { useOutboundLink } from '~/hooks';
import { Hero, Footer } from '~/components';

export default function App() {
  useOutboundLink();

  return (
    <div className="container">
      <div className="h-screen flex flex-col justify-between">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
