import React, { FunctionComponent } from 'react';
import { useShlinkSpecUrl } from '../helpers';
import LoadingSpec from '../components/LoadingSpec';
import SwaggerContainer from '../components/SwaggerContainer';
import Layout from '../components/Layout';

const Home: FunctionComponent = () => {
  const { url, tags, tagsError } = useShlinkSpecUrl('swagger');

  return (
    <Layout tags={tags}>
      {!url ? <LoadingSpec withError={tagsError} /> : <SwaggerContainer url={url} />}
    </Layout>
  );
};

export default Home;
