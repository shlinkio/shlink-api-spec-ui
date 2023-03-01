import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { useResolveVersion, useRouter } from '../helpers';
import ShlinkLogo from './ShlinkLogo';

export interface HeaderProps {
  setTag: (newTag: string) => void;
  tags: string[];
}

const Header: FunctionComponent<HeaderProps> = ({ setTag, tags }) => {
  const { query } = useRouter();
  const [activeTag, setActiveTag] = useState('');
  const resolvedVersion = useResolveVersion(query, tags);
  const onTagChange = ({ target }: ChangeEvent<HTMLSelectElement>) => setTag(target.value);

  useEffect(() => {
    resolvedVersion && setActiveTag(resolvedVersion);
  }, [resolvedVersion]);

  return (
    <Headroom style={{ zIndex: 99 }}>
      <header className="header swagger-ui">
        <div className="wrapper">
          <h2 className="header__title">
            <ShlinkLogo className="header__title-logo" />{' '}
            Shlink<span className="header__subtitle"> - <small>The URL shortener</small></span>
          </h2>
          <select className="header__tags-list" value={activeTag} onChange={onTagChange}>
            {tags.map((tag: string) => <option key={tag} value={tag}>Shlink {tag}</option>)}
          </select>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
