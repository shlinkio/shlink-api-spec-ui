import { FunctionComponent } from 'react';
import { compare } from 'compare-versions';
import { useShlinkSpecUrl } from '../helpers';
import LoadingSpec from '../components/LoadingSpec';
import Layout from '../components/Layout';
import AsyncApiContainer from '../components/AsyncApiContainer';

const MIN_ASYNC_API_VERSION = '2.2.0';

export const AsyncApiPage: FunctionComponent = () => {
  const { url, versionToLoad, tags, tagsError } = useShlinkSpecUrl('async-api');
  const versionIsTooSmall = versionToLoad && compare(versionToLoad, MIN_ASYNC_API_VERSION, '<');

  return (
    <Layout tags={tags}>
      {versionIsTooSmall && (
        <div className="loading-spec">
          <h2>Async API was introduced in Shlink v{MIN_ASYNC_API_VERSION}</h2>
        </div>
      )}
      {!versionIsTooSmall && (!url ? <LoadingSpec withError={tagsError} /> : <AsyncApiContainer url={url} />)}
    </Layout>
  );
};
