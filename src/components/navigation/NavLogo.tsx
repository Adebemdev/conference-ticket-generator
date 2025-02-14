import ThumbImage from '../../assets/images/thumb-image.svg';
import TiczImage from '../../assets/images/ticz-image.svg';

const NavLogo = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <img src={ThumbImage} alt='' className='lg:h-10' />
      <img src={TiczImage} alt='' />
    </div>
  );
};

export default NavLogo;
