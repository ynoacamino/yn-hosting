import { cn } from '@/lib/utils';

export default function Section({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section className={cn('w-full max-w-6xl px-5 md:px-6 flex items-center justify-center', className)} {...props} />
  );
}
