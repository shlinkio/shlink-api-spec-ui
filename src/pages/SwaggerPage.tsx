import { FC } from 'react';
import { useShlinkSpecUrl } from '../helpers';
import Layout from '../components/Layout';
import LoadingSpec from '../components/LoadingSpec';
import SwaggerContainer from '../components/SwaggerContainer';

export const SwaggerPage: FC = () => {
  const { url, tags, tagsError } = useShlinkSpecUrl('swagger');

  return (
    <Layout tags={tags}>
      {!url ? <LoadingSpec withError={tagsError} /> : <SwaggerContainer url={url} />}
    </Layout>
  );
};
