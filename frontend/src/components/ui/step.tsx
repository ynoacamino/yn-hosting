interface StepProps {
  index: number;
  title: string;
  children?: React.ReactNode;
}

export function Step({ index, title, children }: StepProps) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-start gap-6 text-lg md:text-2xl">
        <div className="flex size-10 min-w-10 items-center justify-center rounded-full border-2 border-foreground">
          {index}
        </div>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}
