import React, { FunctionComponent } from 'react';
import { useShlinkSpecUrl, useShlinkTags } from '../helpers';
import LoadingSpec from '../components/LoadingSpec';
import SwaggerContainer from '../components/SwaggerContainer';
import Layout from '../components/Layout';

const Home: FunctionComponent = () => {
  const { tags, error } = useShlinkTags();
  const { url } = useShlinkSpecUrl('swagger', tags[0]);

  return (
    <Layout tags={tags}>
      {!url ? <LoadingSpec withError={error} /> : <SwaggerContainer url={url} />}
    </Layout>
  );
};

export default Home;
