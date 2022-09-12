import React from 'react';
import beamsAvif from '~/assets/beams.avif';
import beamsPng from '~/assets/beams.png';

export default function Beams() {
  return (
    <div className="absolute -z-30 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcSet={beamsAvif} type="image/avif" />
          <img
            src={beamsPng}
            alt="Beams"
            decoding="async"
            className="w-[90rem] flex-none max-w-none"
          />
        </picture>
      </div>
    </div>
  );
}
