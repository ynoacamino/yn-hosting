import Link from "next/link";
import type { Page } from "@/config/pages";

interface ColumnLinksProps extends Page {
  pages?: Page[];
}

export default function ColumnLinks(page: ColumnLinksProps) {
  const { name, path, pages, sections } = page;

  return (
    <div className="mb-4 flex grow basis-36 flex-col gap-2">
      <Link href={path} className="font-medium">
        {name}
      </Link>
      {pages?.map((subPage) => (
        <Link
          key={subPage.path}
          href={subPage.path}
          className="text-muted-foreground hover:underline"
        >
          {subPage.name}
        </Link>
      ))}
      {sections?.map((section) => (
        <Link
          key={section.id}
          href={`${path}#${section.id}`}
          className="text-muted-foreground hover:underline"
        >
          {section.name}
        </Link>
      ))}
    </div>
  );
}
