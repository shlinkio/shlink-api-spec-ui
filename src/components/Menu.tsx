import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import './Menu.css';
import { useRouter } from '../helpers';

const Menu: FunctionComponent = () => {
  const { pathname } = useRouter();

  return (
    <div className="menu">
      <nav>
        <Link href="/">
          <a className={pathname.includes('async-api') ? '' : 'active'}>REST API spec</a>
        </Link>
        <Link href="/async-api">
          <a className={pathname.includes('async-api') ? 'active' : ''}>Async API spec</a>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
