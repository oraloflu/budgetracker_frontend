import React from 'react';
import HeroBg from '../assets/pictures/vault.svg';
export default function Hero(): JSX.Element {
  return (
    <div className="w-full mx-auto">
      <img src={HeroBg} alt="hero-bg" className="w-full h-full" />
    </div>
  );
}
