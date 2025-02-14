import { MainLayoutProps } from '@/types';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className=''>
      <main className=''>{children}</main>
    </div>
  );
};

export default MainLayout;
