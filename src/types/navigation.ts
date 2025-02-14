import { ReactNode } from 'react';

export interface NavLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export interface NavItemType {
  label: string;
  path: string;
  children?: NavItemType[];
}
