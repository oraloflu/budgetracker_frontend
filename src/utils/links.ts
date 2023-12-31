interface Link {
  id: number;
  path: string;
  icon: string;
  text: string;
}

interface MenuLinks extends Link {}

interface NavLinks extends Link {}

export const menuLinks: MenuLinks[] = [
  {
    id: 1,
    path: '/',
    icon: '',
    text: 'Dashboard'
  },
  {
    id: 2,
    path: '/expenses',
    icon: '',
    text: 'Expenses'
  },
  {
    id: 3,
    path: '/income',
    icon: '',
    text: 'Income'
  },
  {
    id: 4,
    path: '/settings',
    icon: '',
    text: 'Settings'
  }
];

export const navLinks: NavLinks[] = [
  {
    id: 1,
    path: '/landing',
    icon: '',
    text: 'Home'
  },
  {
    id: 2,
    path: '/about',
    icon: '',
    text: 'About'
  },
  {
    id: 3,
    path: '/login',
    icon: '',
    text: 'Login'
  }
];
