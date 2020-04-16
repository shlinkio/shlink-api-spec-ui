import React, { FunctionComponent } from 'react';
import { useShlinkSpecUrl, useShlinkTags } from '../helpers';
import LoadingSpec from '../components/LoadingSpec';
import Layout from '../components/Layout';
import AsyncApiContainer from '../components/AsyncApiContainer';

const MIN_ASYNC_API_VERSION = '2.1.0';

const AsyncApi: FunctionComponent = () => {
  const { tags, error } = useShlinkTags();
  const { url, versionToLoad } = useShlinkSpecUrl('async-api', tags[0]);
  const versionIsTooSmall = versionToLoad && versionToLoad < MIN_ASYNC_API_VERSION;

  return (
    <Layout tags={tags}>
      {versionIsTooSmall && (
        <div className="loading-spec">
          <h2>Async API was introduced in Shlink v{MIN_ASYNC_API_VERSION}</h2>
        </div>
      )}
      {!versionIsTooSmall && (!url ? <LoadingSpec withError={error} /> : <AsyncApiContainer url={url} />)}
    </Layout>
  );
};

export default AsyncApi;
