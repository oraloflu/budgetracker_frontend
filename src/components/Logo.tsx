import { NavLink } from 'react-router-dom';
import Budgetracker from '../assets/images/budgetracker-dark-logo.svg';

export default function Logo() {
  return (
    <NavLink to="/" className="block px-3 py-1 mb-3">
      <img src={Budgetracker} alt="logo" width="" height="" />
    </NavLink>
  );
}
