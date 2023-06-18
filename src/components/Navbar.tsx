import React from 'react';
import { navLinks } from '../utils/links';
import { NavLink } from 'react-router-dom';
import Logo_white from './Logo_white';

export default function Navbar(): JSX.Element {
  return (
    <nav className="h-16 shadow-md flex items-center justify-center">
      <div className="ml-16">
        <Logo_white to="/landing" width="120px" height="40px" />
      </div>
      <ul className="flex-1 flex items-center justify-center">
        {navLinks?.map((link) => {
          return (
            <li key={link?.id}>
              <NavLink
                to={link?.path}
                className="block py-1 px-4 mx-3 rounded border border-red-200 hover:bg-red-400 hover:text-white"
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
