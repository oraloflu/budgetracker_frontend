import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuLinks } from '../utils/links';
import Logo from './Logo';
import Profile from './Profile';

export default function Sidebar(): JSX.Element {
  interface NavLinkStyles {
    boxShadow: string;
    backgroundColor: string;
    color: string;
    transition: string;
  }
  const navLinkStyles = ({ isActive }: { isActive: boolean }): NavLinkStyles => {
    return {
      boxShadow: isActive ? '2px 3px 5px rgb(0, 0, 0, .8)' : '',
      backgroundColor: isActive ? 'rgba(37, 37, 37, .2)' : '',
      color: isActive ? 'white' : '',
      transition: isActive ? '300ms all' : ''
    };
  };
  return (
    <aside className="w-full h-screen columns-1 bg-gray-800">
      <Logo to="/" width="300px" height="120px" />
      <Profile />
      <div className="my-4 mx-auto h-0 w-4/5 border border-gray-100"></div>
      <ul className="mt-16 w-full">
        {menuLinks.map((menuLink) => {
          return (
            <li className="my-3 transition cursor-pointer" key={menuLink?.id}>
              <NavLink
                to={menuLink?.path}
                style={navLinkStyles}
                className="block px-6 py-4 w-full h-12 text-center text-sm font-medium text-yellow-700 hover:bg-gray-600"
              >
                {menuLink?.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
