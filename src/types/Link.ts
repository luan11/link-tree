import type { Icon } from './Icon';

export type Link = {
  backgroundColor: string;
  url: string;
  iconName?: Icon;
  title: string;
  highlighted: boolean;
};
