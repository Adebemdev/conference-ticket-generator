import { NavLinkProps } from '@/types/navigation';

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default NavLink;
