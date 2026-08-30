"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import pagesConfig from "@/config/pages";
import { cn } from "@/lib/utils";

function LinkMobile(
  props: React.ComponentProps<"a"> & {
    children: ReactNode;
    setSheetOpen: (value: boolean) => void;
  },
) {
  const { push } = useRouter();
  const { href, setSheetOpen, children, ...rest } = props;

  return (
    <a
      {...rest}
      href={href?.toString()}
      onClick={(e) => {
        e.preventDefault();
        setSheetOpen(false);
        push(href?.toString() || "");
      }}
    >
      {children}
    </a>
  );
}

interface HeaderMobileProps {
  logo: string;
  title: string;
}

export default function HeaderMobile({ logo, title }: HeaderMobileProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild className="flex md:hidden">
        <Button variant="ghost" size="icon" className="size-10">
          <Menu className="size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex py-2 md:hidden">
        <ScrollArea className="h-[95vh]">
          <SheetHeader>
            <div className="mb-5 flex flex-col gap-4">
              <SheetTitle className="flex flex-col font-bold text-3xl">
                <span className="flex items-center justify-center gap-2 font-extrabold text-2xl">
                  <Image
                    src={logo}
                    alt={title}
                    width={160}
                    height={70}
                    className="w-40 object-contain"
                  />
                </span>
              </SheetTitle>
            </div>
          </SheetHeader>
          <nav className="flex flex-col justify-center gap-6 px-4 font-medium text-foreground">
            {pagesConfig.pages.map((pagina) => (
              <div key={pagina.path}>
                <LinkMobile
                  href={pagina.path}
                  className={cn(
                    "mb-4 px-2 py-2 font-semibold text-foreground/70 hover:underline",
                  )}
                  setSheetOpen={setSheetOpen}
                >
                  {pagina.name}
                </LinkMobile>
                <div className="flex flex-col py-2 pl-5">
                  {pagina.sections?.map((section) => (
                    <LinkMobile
                      key={section.id}
                      href={`${pagina.path}#${section.id}`}
                      className="px-1 py-1 font-normal"
                      setSheetOpen={setSheetOpen}
                    >
                      {section.name}
                    </LinkMobile>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
