import { compare } from 'compare-versions';
import type { FC } from 'react';
import { AsyncApiContainer } from '../components/AsyncApiContainer';
import { LoadingSpec } from '../components/LoadingSpec';
import type { LoadingTagsResult } from '../helpers';
import { useShlinkSpecUrl } from '../helpers';

const MIN_ASYNC_API_VERSION = '2.2.0';

export const AsyncApiPage: FC<{ tagsResult: LoadingTagsResult }> = ({ tagsResult }) => {
  const { tags, error } = tagsResult;
  const { url, versionToLoad } = useShlinkSpecUrl('async-api', tags);
  const versionIsTooSmall = versionToLoad && compare(versionToLoad, MIN_ASYNC_API_VERSION, '<');

  if (versionIsTooSmall) {
    return (
      <div className="loading-spec">
        <h2>Async API was introduced in Shlink v{MIN_ASYNC_API_VERSION}</h2>
      </div>
    );
  }

  return !url ? <LoadingSpec withError={error} /> : <AsyncApiContainer url={url} />;
};
