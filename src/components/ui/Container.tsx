import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

export function Container({ children, className, as = 'div' }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={cn('mx-auto w-full max-w-[1320px] px-6 md:px-10 xl:px-16', className)}>
      {children}
    </Tag>
  );
}
