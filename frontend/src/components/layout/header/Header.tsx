import Image from "next/image";
import Link from "next/link";
import client from "../../../../tina/__generated__/client";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

import "./Header.css";

export const revalidate = 60 * 60;

export default async function Header() {
  let logo = "/uploads/logo-emblema.png";
  let title = "EnderHost";

  try {
    const globalData = await client.queries.global({
      relativePath: "index.json",
    });
    if (globalData?.data?.global?.logo) {
      logo = globalData.data.global.logo;
    }
    if (globalData?.data?.global?.title) {
      title = globalData.data.global.title;
    }
  } catch {
    // fallback to defaults if not generated yet
  }

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
