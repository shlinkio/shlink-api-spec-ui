import type { FC, PropsWithChildren } from 'react';
import { useRouter } from '../helpers';
import { Header } from './Header';
import { Menu } from './Menu';

type LayoutProps = PropsWithChildren<{
  tags: string[];
}>;

export const Layout: FC<LayoutProps> = ({ children, tags }) => {
  const { navigate } = useRouter();
  const navigateToTag = async (tag: string) => navigate(`?version=${tag}`);

  return (
    <div>
      <Header setTag={navigateToTag} tags={tags} />
      <div className="container mx-auto px-5">
        <Menu />
        {children}
      </div>
    </div>
  );
};
