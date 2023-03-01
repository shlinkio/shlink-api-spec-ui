import type { FC } from 'react';
import SwaggerUI from 'swagger-ui-react';
import { Layout } from '../components/Layout';
import { LoadingSpec } from '../components/LoadingSpec';
import { useShlinkSpecUrl } from '../helpers';

export const SwaggerPage: FC = () => {
  const { url, tags, tagsError } = useShlinkSpecUrl('swagger');

  return (
    <Layout tags={tags}>
      {!url ? <LoadingSpec withError={tagsError} /> : <SwaggerUI url={url} docExpansion="list" deepLinking />}
    </Layout>
  );
};
