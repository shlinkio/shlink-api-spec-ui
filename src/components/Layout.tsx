import type { FunctionComponent, PropsWithChildren } from 'react';
import { useRouter } from '../helpers';
import { Header } from './Header';
import { Menu } from './Menu';

type LayoutProps = PropsWithChildren<{
  tags: string[];
}>;

export const Layout: FunctionComponent<LayoutProps> = ({ children, tags }) => {
  const { navigate } = useRouter();
  const navigateToTag = async (tag: string) => navigate(`?version=${tag}`);

  return (
    <div>
      <Header setTag={navigateToTag} tags={tags} />
      <Menu />
      {children}
    </div>
  );
};
