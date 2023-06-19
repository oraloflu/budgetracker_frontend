import React from 'react';

import Hamburger from './Hamburger';
import HeaderTitle from './HeaderTitle';

export default function Header(): JSX.Element {
  return (
    <header className="shadow-md font-mono h-20 py-4 px-4 bottom-28 flex items-center justify-between">
      {/*       <Hamburger />
       */}{' '}
      <div className="w-36 h-24"></div>
      <HeaderTitle />
    </header>
  );
}
