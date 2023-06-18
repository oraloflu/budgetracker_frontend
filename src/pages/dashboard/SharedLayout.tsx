import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import Stats from './Stats';

export default function SharedLayout(): JSX.Element {
  return (
    <div className="w-full h-screen grid grid-cols-7">
      <Sidebar />
      <main className="h-full col-start-2 col-end-8 bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
}
