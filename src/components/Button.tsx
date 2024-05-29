import React from 'react';
import { Button as ShadButton } from './ui/button';
import { cn } from '@/lib/utils';
const Button = ({
  label,
  icon,
  className,
}: {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <ShadButton
      className={cn(
        'min-w-32 rounded-none border border-primary bg-primary-foreground/5 px-4 py-2 text-primary backdrop-blur-lg transition-all  duration-200 hover:bg-primary/25',
        className,
      )}
    >
      {label} {icon ? icon : ''}
    </ShadButton>
  );
};

export default Button;
