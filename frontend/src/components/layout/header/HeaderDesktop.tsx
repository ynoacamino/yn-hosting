import Link from "next/link";
import pagesConfig from "@/config/pages";
import { cn } from "@/lib/utils";

export default function HeaderDesktop() {
  return (
    <nav className="hidden items-start justify-center gap-10 md:flex">
      {pagesConfig.pages.map((pagina) => (
        <Link
          key={pagina.path}
          href={pagina.path}
          className={cn("group relative font-semibold text-sm uppercase")}
        >
          <span className="absolute inset-0 flex scale-110 items-center justify-center opacity-0 blur-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-70">
            {pagina.name}
          </span>
          <span className="relative z-10">{pagina.name}</span>
        </Link>
      ))}
    </nav>
  );
}
