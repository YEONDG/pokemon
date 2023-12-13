import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/nav';
import { ThemeProvider } from '@/components/theme-provider';

const Root = () => {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='dark:bg-black h-full'>
          <NavBar />
          <main className='container pt-20 mx-auto border-2 h-fit'>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
