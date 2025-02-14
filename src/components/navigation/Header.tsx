// import { ReactNode } from 'react';
import NavLogo from './NavLogo';
import NavButton from './NavButton';
import NavBar from './NavBar';

// interface HeaderProps {
//   children: ReactNode;
// }

const Header = () => {
  return (
    <header className='bg-rgba(5, 37, 44, 0.4) flex max-h-64 max-w-lg flex-row items-center justify-between rounded-2xl border-1 border-[#197686] p-4 lg:mx-auto lg:min-w-7xl'>
      <NavLogo />
      <NavBar />
      <NavButton />
    </header>
  );
};

export default Header;
