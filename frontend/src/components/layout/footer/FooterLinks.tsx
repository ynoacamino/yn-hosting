import Image from "next/image";
import Link from "next/link";
import pagesConfig from "@/config/pages";
import client from "../../../../tina/__generated__/client";
import ColumnLinks from "./ColumnLinks";

export default async function FooterLinks() {
  let logo = "/uploads/logo-emblema.png";
  let title = "EnderHost";

  try {
    const globalData = await client.queries.global({
      relativePath: "index.json",
    });
    if (globalData?.data?.global?.logo) logo = globalData.data.global.logo;
    if (globalData?.data?.global?.title) title = globalData.data.global.title;
  } catch {
    // fallback
  }

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
