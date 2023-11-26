import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav';

const Root = () => {
  return (
    <>
      <NavBar />
      <main className='container mt-[72px] mx-auto border-2'>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
