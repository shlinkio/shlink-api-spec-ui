import type { ChangeEvent, FC } from 'react';
import { useEffect, useState } from 'react';
import { useResolveVersion, useRouter } from '../helpers';
import { ShlinkLogo } from './ShlinkLogo';

export interface HeaderProps {
  setTag: (newTag: string) => void;
  tags: string[];
}

export const Header: FC<HeaderProps> = ({ setTag, tags }) => {
  const { query } = useRouter();
  const [activeTag, setActiveTag] = useState('');
  const resolvedVersion = useResolveVersion(query, tags);
  const onTagChange = ({ target }: ChangeEvent<HTMLSelectElement>) => setTag(target.value);

  useEffect(() => {
    if (resolvedVersion) {
      setActiveTag(resolvedVersion);
    }
  }, [resolvedVersion]);

  return (
    <header className="bg-shlink-brand h-16 py-4 fixed top-0 w-full z-30">
      <div className="container mx-auto px-5 flex">
        <h2 className="text-white text-2xl font-bold flex-1">
          <ShlinkLogo className="w-8 h-8 inline" />{' '}
          Shlink<span className="hidden md:inline"> - <small>The URL shortener</small></span>
        </h2>
        <select
          className="w-48 p-1 rounded-sm drop-shadow-md border border-black bg-gray-100"
          value={activeTag}
          onChange={onTagChange}
        >
          {!tags.length && <option>Loading...</option>}
          {tags.map((tag: string) => <option key={tag} value={tag}>Shlink {tag}</option>)}
        </select>
      </div>
    </header>
  );
};
