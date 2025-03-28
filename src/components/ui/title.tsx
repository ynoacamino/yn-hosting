import { cn } from '@/lib/utils';
import React from 'react';

type TitleProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Title<T extends React.ElementType = 'h1'>({
  as,
  className,
  children,
  ...props
}: TitleProps<T>) {
  const Component = as || 'h1';
  return (
    <Component
      className={cn('text-foreground text-4xl md:text-5xl rounded-lg py-4 text-center uppercase font-black w-full grid', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Title;
