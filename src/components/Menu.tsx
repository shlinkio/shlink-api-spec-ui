import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from '../helpers';

const Menu: FunctionComponent = () => {
  const { pathname, query } = useRouter();
  const { version } = query;
  const buildPath = (path: string): string => version ? `${path}?version=${version}` : path;

  return (
    <div className="menu">
      <nav>
        <Link href={buildPath('/')}>
          <a className={pathname.includes('async-api') ? '' : 'active'}>REST API spec</a>
        </Link>
        <Link href={buildPath('/async-api')}>
          <a className={pathname.includes('async-api') ? 'active' : ''}>Async API spec</a>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
