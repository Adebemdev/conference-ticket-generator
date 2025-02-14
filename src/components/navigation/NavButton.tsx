import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface NavigationButtonProps {}
const NavButton = ({}: NavigationButtonProps) => {
  return (
    <Button variant={'secondary'} size={'sm'} className='gap-4'>
      MY TICKETS
      <ArrowRight size={50} />
    </Button>
  );
};

export default NavButton;
