import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const SocialLink = ({
  className,
  children,
  ...props
}: ComponentProps<`a`>) => (
  <a
    target="_blank"
    {...props}
    className={twMerge(
      `w-[3.875rem] h-[3.875rem] rounded-full bg-secondary text-primary-1 flex items-center justify-center transition-transform duration-500 hover:scale-75`,
      className
    )}
  >
    {children}
  </a>
);
