"use client"

import { useState } from 'react';

const SideBar1 = () => {

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full border-r border-zinc-500 text-white p-4 transition-transform transform 
          } md:translate-x-0 w-64 h-full py-16 bg-orange-600`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">Item 1</li>
          <li className="mb-2">Item 2</li>
          <li className="mb-2">Item 3</li>
          <li className="mb-2">Item 4</li>
        </ul>
      </div>

    </>
  );
};

export default SideBar1;
