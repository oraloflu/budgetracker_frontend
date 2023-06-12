type MenuLinks = {
  id: number;
  path: string;
  icon: string;
  text: string;
};

export const menuLinks: MenuLinks[] = [
  {
    id: 1,
    path: '/',
    icon: '',
    text: 'Dashboard',
  },
  {
    id: 2,
    path: '/expenses',
    icon: '',
    text: 'Expenses',
  },
  {
    id: 3,
    path: '/income',
    icon: '',
    text: 'Income',
  },
  {
    id: 4,
    path: '/settings',
    icon: '',
    text: 'Settings',
  },
];
