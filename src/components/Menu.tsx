import classNames from 'classnames';
import type { FC } from 'react';
import { Link } from 'react-router';
import { useRouter } from '../helpers';

export const Menu: FC = () => {
  const { pathname, query } = useRouter();
  const version = query.get('version');
  const buildPath = (path: string): string => (version ? `${path}?version=${version}` : path);
  const buildClasses = (active: boolean) => classNames('menu-item', { active });

  return (
    <div className="mb-2.5">
      <nav>
        <Link to={buildPath('/')} className={buildClasses(pathname === '/')}>REST API spec</Link>
        <Link to={buildPath('/async-api')} className={buildClasses(pathname === '/async-api')}>Async API spec</Link>
      </nav>
    </div>
  );
};
