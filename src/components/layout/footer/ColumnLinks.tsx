import Link from 'next/link';

type Section = {
  id: string;
  name: string;
};

type Page = {
  name: string;
  path: string;
  pages?: Page[];
  sections?: Section[];
};

export default function ColumnLinks(page: Page) {
  const {
    name, path, pages, sections,
  } = page;

  return (
    <div className="flex flex-col gap-2 grow basis-36">
      <Link
        href={path}
        className="font-medium"
      >
        { name }
      </Link>
      {
        pages?.map((subPage) => (
          <Link
            key={subPage.path}
            href={subPage.path}
            className="text-muted-foreground hover:underline"
          >
            {subPage.name}
          </Link>
        ))
      }
      {
        sections?.map((section) => (
          <Link
            key={section.id}
            href={`${path}#${section.id}`}
            className="text-muted-foreground hover:underline"
          >
            {section.name}
          </Link>
        ))
      }
    </div>
  );
}
