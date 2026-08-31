import Image from "next/image";
import Link from "next/link";
import { HEADER_REVALIDATE } from "@/config/variables";
import { getGlobalData } from "@/services/cms";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

import "./Header.css";

export const revalidate = HEADER_REVALIDATE;

export default async function Header() {
  const { logo, title } = await getGlobalData();

  return (
    <div
      className="sticky top-0 z-50 flex w-full justify-center backdrop-blur-lg"
      id="header"
    >
      <header className="flex w-full max-w-6xl items-center justify-between px-6 pt-1">
        <Link href="/">
          <span className="flex items-center justify-center gap-2 font-extrabold text-2xl">
            <Image
              src={logo}
              alt={title}
              width={160}
              height={70}
              className="aspect-16/7 w-40 object-contain"
              priority
            />
          </span>
        </Link>
        <HeaderDesktop />
        <HeaderMobile logo={logo} title={title} />
      </header>
    </div>
  );
}
