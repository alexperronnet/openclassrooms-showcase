import React from 'react';
import anime from 'animejs';
import { Svg } from '~/components';

export default function Footer() {
  const logoAnimation = () => {
    anime({
      targets: '#footer__logo path',
      duration: 500,
      easing: 'easeInOutSine',
      strokeDashoffset: [anime.setDashoffset, 0],
    });
  };

  const handleMouseEnter = () => {
    logoAnimation();
  };

  return (
    <footer className="flex items-center justify-between mt-16 md:mt-20 lg:mt-24 py-6 sm:py-12 border-t border-slate-800">
      <a href="https://alexperronnet.dev" onMouseEnter={handleMouseEnter}>
        <Svg name="ap-logo" id="footer__logo" className="h-6 sm:h-8" />
      </a>
      <a
        href="https://github.com/alexperronnet/openclassrooms-showcase"
        className="text-sm sm:text-base link-highlight">
        View Source
      </a>
    </footer>
  );
}
