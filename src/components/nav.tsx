import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='fixed top-0 w-full bg-red-300 z-10'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <Link to={'/'} className='text-3xl m-5'>
            포켓몬도감
          </Link>
          <div className='text-3xl m-5'>메뉴</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
