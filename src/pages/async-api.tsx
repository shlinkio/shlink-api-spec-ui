import React, { FunctionComponent } from 'react';
import { useShlinkSpecUrl, useShlinkTags } from '../helpers';
import LoadingSpec from '../components/LoadingSpec';
import SwaggerContainer from '../components/SwaggerContainer';
import Layout from '../components/Layout';

const AsyncApi: FunctionComponent = () => {
  const { tags, error } = useShlinkTags();
  const url = useShlinkSpecUrl('async-api', tags[0]);

  return (
    <Layout tags={tags}>
      {!url ? <LoadingSpec withError={error} /> : <SwaggerContainer url={url} />}
    </Layout>
  );
};

export default AsyncApi;
