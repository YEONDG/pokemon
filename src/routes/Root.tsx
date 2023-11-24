import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav';

const Root = () => {
  return (
    <>
      <NavBar />
      <div className='container mt-[72px] mx-auto border-2'>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
