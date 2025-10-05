import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt="stockLogo" width={40} height={32} className="h-8 w-auto cursor-pointer">
    </Link>
        </Image> 
    
      </div>
    </header>
  );
};

export default Header;
