import Image from "next/image";
import Link from "next/link";
import pagesConfig from "@/config/pages";
import { getGlobalData } from "@/services/cms";
import ColumnLinks from "./ColumnLinks";

export default async function FooterLinks() {
  const { logo, title } = await getGlobalData();

  return (
    <div className="flex flex-wrap gap-7">
      {pagesConfig.pages
        .filter((page) => page.sections && page.sections.length > 2)
        .map((page) => (
          <ColumnLinks key={page.path} {...page} />
        ))}
      <Link
        href="/"
        className="flex max-h-60 grow basis-36 justify-center self-start"
      >
        <Image
          src={logo}
          alt={title}
          width={160}
          height={70}
          className="h-auto w-40 object-contain"
        />
      </Link>
    </div>
  );
}
