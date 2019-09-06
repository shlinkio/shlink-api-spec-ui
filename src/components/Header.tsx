import React, { ChangeEvent, FunctionComponent } from 'react';
import Headroom from 'react-headroom';
import './Header.css';

export interface HeaderProps {
  setActiveTag: (newTag: string) => void;
  tags: string[];
}

const Header: FunctionComponent<HeaderProps> = ({ setActiveTag, tags }) => {
  const onTagChange = ({ target }: ChangeEvent<HTMLSelectElement>) => setActiveTag(target.value);

  return (
    <Headroom>
      <header className="header swagger-ui">
        <div className="wrapper">
          <h2 className="header__title">
            <img
              src="https://shlink.io/images/shlink-logo-white.png"
              alt="Shlink"
              width="30"
              className="header__title-logo"
            />{' '}
            Shlink<span className="header__subtitle"> - <small>The URL shortener</small></span>
          </h2>
          <select className="header__tags-list" onChange={onTagChange}>
            {tags.map((tag: string) => <option key={tag} value={tag}>Shlink {tag}</option>)}
          </select>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
