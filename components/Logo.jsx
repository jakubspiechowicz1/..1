import Link from 'next/link';
import Image from 'next/image';

//const Logo = () => {
//  return (
//    <Link href='/'>
//      <Image src='/logo1.svg' width={400} height={100} priority alt='' />
//    </Link>
//  );
//};
//
//export default Logo;

const Logo = ({ containerStyles, imgSrc }) => {
  return (
    <Link href='/'>
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' />
    </div>
    </Link>
  );
};

export default Logo;



