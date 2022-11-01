import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from '../helpers';

const Menu: FunctionComponent = () => {
  const { pathname, query } = useRouter();
  const { version } = query;
  const buildPath = (path: string): string => (version ? `${path}?version=${version}` : path);

  return (
    <div className="menu">
      <nav>
        <Link href={buildPath('/')} className={pathname.includes('async-api') ? '' : 'active'}>REST API spec</Link>
        <Link href={buildPath('/async-api')} className={pathname.includes('async-api') ? 'active' : ''}>
          Async API spec
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
