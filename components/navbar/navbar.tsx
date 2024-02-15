import Image from 'next/image';
import Link from 'next/link';
import { links } from './links';
import DropMenu from './drop-menu';

export default function Navbar() {
  return (
    <nav className='py-'>
      <main className='container lg:px-32 mx-auto flex items-center md:gap-10 gap-6'>
        <div className='flex justify-between items-center xl:basis-[90%] md:basis-[80%] basis-[70%]'>
          <Link href={'/'}>
            <Image
              src={'images/logo.svg'}
              alt='logo'
              width={100}
              height={100}
              className='cursor-pointer w-20 h-20 md:w-24 md:h-24'
            />
          </Link>
          <ul className='hidden md:gap-10 gap-6 md:flex'>
            {links.map(({ href, label, icon }) => (
              <li
                key={`${href}${label}`}
                className='flex justify-center items-center font-semibold
                gap-2 text-slate-600 before:content-[" "] relative before:absolute overflow-hidden
                before:bottom-0  before:w-0  before:h-1 hover:before:w-full before:bg-[#1566d8bf] before:duration-500
                transition-all before:rounded-lg pb-2 before:-left-full hover:before:left-0 before:transition-all'
              >
                <Link href={href}>{label}</Link>
                {icon && (
                  <Image
                    src={icon}
                    alt='icon'
                    width={10}
                    height={10}
                    className='cursor-pointer'
                  />
                )}
              </li>
            ))}
          </ul>
          <DropMenu classes='md:hidden block' />
        </div>
        <div className='xl:basis-[10%] md:basis-[20%] basis-[25%] mx-auto text-right'>
          <button
            className='bg-white text-[#1565D8] hover:bg-[#1565D8] font-semibold
         hover:text-white transition-all md:px-4 px-4 py-2 rounded-full border-2 border-[#1565D8]
         text-xs sm:text-base'
          >
            Sign in
          </button>
        </div>
      </main>
    </nav>
  );
}
