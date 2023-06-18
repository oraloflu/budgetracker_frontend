import React from 'react';
import { NavLink } from 'react-router-dom';
import Budgetracker from '../assets/images/budgeTracker-logo.svg';

interface Proptypes {
  to: string;
  width: string;
  height: string;
}
export default function Logo({ to, width, height }: Proptypes): JSX.Element {
  return (
    <NavLink to={to} className="block px-3 py-1 mb-3">
      <img src={Budgetracker} alt="logo" width={width} height={height} />
    </NavLink>
  );
}
