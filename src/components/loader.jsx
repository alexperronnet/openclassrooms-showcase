import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import { Svg } from '~/components';

export default function Loader({ finishLoading }) {
  const [, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#loader__logo path',
        delay: 150,
        duration: 1350,
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
      })

      .add({
        targets: '#loader__logo',
        delay: 250,
        duration: 250,
        easing: 'easeInOutSine',
        opacity: 0,
        scale: 0.1,
      })

      .add({
        targets: '#loader',
        duration: 150,
        easing: 'easeInOutSine',
        opacity: 0,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="loader"
      className="grid justify-center items-center fixed inset-0 h-screen bg-gray-900">
      <Svg name="ap-logo" id="loader__logo" className="h-24 text-cyan-400" />
    </div>
  );
}
