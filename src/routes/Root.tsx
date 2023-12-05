import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav';
import { ThemeProvider } from '@/components/theme-provider';

const Root = () => {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='dark:bg-black'>
          <NavBar />
          <main className='container mt-[72px] mx-auto border-2 min-h-screen'>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Root;
