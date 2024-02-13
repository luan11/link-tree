import { useEffect, useState } from 'react';

import type { Link } from '../types/Link';
import { EmptyLink } from '../ui/components/empty-link';
import { Link as LinkComponent } from '../ui/components/link';

export const Links = () => {
  const [data, setData] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [anErrorOccurred, setAnErrorOccurred] = useState(false);

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

  return (
    <div className="flex flex-col py-6 px-9 rounded-lg shadow-lg bg-primary-0 flex-grow gap-6 overflow-y-auto items-center col-start-4 col-end-10">
      {isLoading && (
        <>
          <EmptyLink />
          <EmptyLink />
          <EmptyLink />
        </>
      )}
      {!isLoading &&
        !anErrorOccurred &&
        data.map((link) => <LinkComponent key={link.url} {...link} />)}
    </div>
  );
};
