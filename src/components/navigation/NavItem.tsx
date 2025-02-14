import NavLink from './NavLink';
import { NavItemType } from '@/types/navigation';

interface NavItemProps {
  item: NavItemType;
}

const NavItem = ({ item }: NavItemProps) => {
  return <NavLink href='/'>{item.label}</NavLink>;
};

export default NavItem;
