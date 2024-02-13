import {
  BookmarkIcon,
  GithubIcon,
  InstagramIcon,
  LinkIcon,
  YoutubeIcon,
} from 'lucide-react';
import { ComponentProps, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useQuery } from '../../hooks/useQuery';
import type { Link as LinkItem } from '../../types/Link';

type LinkProps = LinkItem & ComponentProps<`a`>;

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
  id,
  ...props
}: LinkProps) => {
  const [isTarget, setIsTarget] = useState(false);

  const query = useQuery();

  const target = query.get(`target`);

  const Icon = iconName ? availableIcons[iconName] ?? LinkIcon : LinkIcon;

  const handleBlur = () => setIsTarget(false);

  useEffect(() => {
    setIsTarget(target === id);
  }, [id, target]);

  return (
    <a
      {...props}
      id={id}
      href={url}
      target="_blank"
      style={{ [`--color`]: backgroundColor } as React.CSSProperties}
      className={twMerge(
        `py-[0.875rem] px-[1.125rem] rounded-2xl shadow-lg gap-2 flex items-center justify-center text-secondary bg-[var(--color)] transition-transform hover:scale-110 duration-500 relative focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500`,
        highlighted && `border-2 border-secondary animate-highlight`,
        isTarget &&
          `focus:outline-lime-500 focus:outline-4 focus:outline-offset-4`
      )}
      autoFocus={isTarget}
      onBlur={handleBlur}
    >
      <span>{<Icon size={32} />}</span>
      <span className="font-semibold text-base">{title}</span>
    </a>
  );
};
