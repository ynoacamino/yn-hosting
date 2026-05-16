import Link from "next/link";
import { extractImageUrl } from "@/lib/directus";
import { apiService } from "@/services/api";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

import "./Header.css";

export const revalidate = 60 * 60;

export default async function Header() {
  const globalData = await apiService.getGlobalData();

  return (
    <div
      className="sticky top-0 z-50 flex w-full justify-center backdrop-blur-lg"
      id="header"
    >
      <header className="flex w-full max-w-6xl items-center justify-between px-6 pt-1">
        <Link href="/">
          <span className="flex items-center justify-center gap-2 font-extrabold text-2xl">
            <img
              src={extractImageUrl(globalData.logo)}
              alt={""}
              className="aspect-16/7 w-40"
            />
          </span>
        </Link>
        <HeaderDesktop />
        <HeaderMobile globalData={globalData} />
      </header>
    </div>
  );
}
