import { cn } from "@/lib/utils";

interface TitleProps {
  className?: string;
  children?: React.ReactNode;
}

function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={cn(
        "grid w-full rounded-lg py-4 text-center font-black text-4xl text-foreground uppercase md:text-[2.65rem]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default Title;
