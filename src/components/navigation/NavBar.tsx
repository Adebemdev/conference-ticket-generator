import { NAVIGATION_ITEMS as navigationItems } from '@/constants/Navigation';

const NavBar = () => {
  return (
    <nav className=''>
      <ul className='hidden md:flex md:items-center md:justify-between md:gap-6'>
        {navigationItems.map((items) => (
          <li key={items.label} className='text-lg font-medium text-[#ffffff5d]'>
            {items.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
