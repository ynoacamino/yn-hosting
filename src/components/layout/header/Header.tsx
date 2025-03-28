'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

function Logo() {
  return (
    <span className="flex items-center justify-center text-2xl font-extrabold gap-1">
      <span>
        YN
      </span>
      <img src="/logo.png" alt="YN-HOSTING" />
      <span>
        HOSTING
      </span>
    </span>
  );
}

export default function Header() {
  const path = usePathname();

  return (
    <div className="w-full bg-background/90 backdrop-blur-lg sticky top-0 z-50 flex justify-center">
      <header className="w-full flex justify-between items-center max-w-6xl py-3 px-6">
        <Link
          href="/"
          className=""
        >
          <Logo />
        </Link>
        <HeaderDesktop path={path} />
        {/* <HeaderMobile path={path} /> */}
      </header>
    </div>
  );
}
