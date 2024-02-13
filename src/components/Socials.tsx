import { GithubIcon, Globe2Icon } from 'lucide-react';

import { SocialLink } from '../ui/components/social-link';

export const Socials = () => (
  <div className="absolute lg:right-0 right-4 bottom-6 flex flex-col gap-2 z-10">
    <SocialLink href="https://me.luancode.dev.br/?from=linktree.luancode.dev.br">
      <Globe2Icon size={48} />
    </SocialLink>

    <SocialLink href="https://github.com/luan11">
      <GithubIcon size={48} />
    </SocialLink>
  </div>
);
