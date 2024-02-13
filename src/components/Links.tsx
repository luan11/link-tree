import { useEffect, useRef, useState } from 'react';

import { useQuery } from '../hooks/useQuery';
import type { Link } from '../types/Link';
import { EmptyLink } from '../ui/components/empty-link';
import { Link as LinkComponent } from '../ui/components/link';

export const Links = () => {
  const [data, setData] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [anErrorOccurred, setAnErrorOccurred] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const query = useQuery();

  const target = query.get(`target`);

  useEffect(() => {
    const fetchLinks = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/luan11/link-tree/tree/links.json`
        );

        if (response.ok) {
          const links: Link[] = await response.json();

          setData(links);
        } else {
          setAnErrorOccurred(true);
        }
      } catch (error) {
        setAnErrorOccurred(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLinks();
  }, []);

  useEffect(() => {
    if (!!data.length && !!target) {
      const targetElement = ref.current?.querySelector<HTMLElement>(
        `#${target}`
      );

      ref.current?.scrollTo(0, targetElement?.offsetTop ?? 0);
      targetElement?.focus();
    }
  }, [data.length, target]);

  return (
    <div
      ref={ref}
      className="flex flex-col py-6 px-9 rounded-lg shadow-lg bg-primary-0 flex-grow gap-6 overflow-y-auto items-center lg:col-start-4 lg:col-end-10 col-start-1 col-end-13 lg:mx-0 mx-4 relative before:w-1 before:h-full before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:mx-auto before:bg-primary-1 scrollbar"
    >
      {isLoading && (
        <>
          <EmptyLink />
          <EmptyLink />
          <EmptyLink />
        </>
      )}

      {!isLoading &&
        !anErrorOccurred &&
        data.map((link, index) => (
          <LinkComponent key={link.url} id={`link-${index}`} {...link} />
        ))}

      {!isLoading && anErrorOccurred && <p>Nenhum link encontrado...</p>}
    </div>
  );
};
