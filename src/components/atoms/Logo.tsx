import Image from 'next/image';
import LogoRemoveBg from '../../../public/images/logo.png';

interface LogoProps {
  xl?: boolean;
}

const Logo = ({ xl }: LogoProps) => (
  <div className={xl ? 'h-16 w-16' : 'h-8 w-8'}>
    <Image src={LogoRemoveBg} alt="FLATNET Logo" />
  </div>
);

export { Logo };
