import React, { FunctionComponent } from 'react';
import './Header.css';

interface HeaderProps {
  setUrl: (newUrl: string) => void;
  tags: string[];
}

const Header: FunctionComponent<HeaderProps> = ({ setUrl, tags }) => {
  console.log(setUrl);

  return (
    <header className="header swagger-ui">
      <div className="wrapper">
        <h2 className="header__title">
          <img
            src="https://shlink.io/images/shlink-logo-white.png"
            alt="Shlink"
            width="30"
            className="header__title-logo"
          />{' '}
          Shlink - <small>The URL shortener</small>
        </h2>
        <select className="header__tags-list">
          {tags.map((tag: string) => <option key={tag}>Shlink {tag}</option>)}
        </select>
      </div>
    </header>
  );
};

export default Header;
