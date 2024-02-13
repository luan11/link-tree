import {
  BookmarkIcon,
  GithubIcon,
  InstagramIcon,
  LinkIcon,
  YoutubeIcon,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import type { Link as LinkProps } from '../../types/Link';

const availableIcons = {
  Youtube: YoutubeIcon,
  Instagram: InstagramIcon,
  Github: GithubIcon,
  Bookmark: BookmarkIcon,
};

export const Link = ({
  backgroundColor,
  url,
  iconName,
  title,
  highlighted,
}: LinkProps) => {
  const Icon = iconName ? availableIcons[iconName] ?? LinkIcon : LinkIcon;

  return (
    <a
      href={url}
      target="_blank"
      style={{ [`--color`]: backgroundColor } as React.CSSProperties}
      className={twMerge(
        `py-[0.875rem] px-[1.125rem] rounded-2xl shadow-lg gap-2 flex items-center justify-center text-secondary bg-[var(--color)] transition-transform hover:scale-110 focus:scale-95 duration-500 relative`,
        highlighted && `border-2 border-secondary animate-highlight`
      )}
    >
      <span>{<Icon size={32} />}</span>
      <span className="font-semibold text-base">{title}</span>
    </a>
  );
};
