import React from 'react';
import { Hero, Navbar } from '../components';

export default function About(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-2 min-h-screen gap-3 mx-4">
        <div className="h-full w-full px-4 flex items-center justify-center">
          <p className="font-normal text-center text-3xl px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            at vitae? Delectus labore vitae ipsa exercitationem minus expedita
            beatae molestias voluptate ducimus voluptatum, quisquam nemo
            consequuntur placeat culpa nesciunt soluta.
          </p>
        </div>
        <Hero />
      </main>
    </>
  );
}
