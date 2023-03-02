import type { FC } from 'react';
import SwaggerUI from 'swagger-ui-react';
import { LoadingSpec } from '../components/LoadingSpec';
import type { LoadingTagsResult } from '../helpers';
import { useShlinkSpecUrl } from '../helpers';

export const SwaggerPage: FC<{ tagsResult: LoadingTagsResult }> = ({ tagsResult }) => {
  const { tags, error } = tagsResult;
  const { url } = useShlinkSpecUrl('swagger', tags);

  return (
    <>
      {!url ? <LoadingSpec withError={error} /> : <SwaggerUI url={url} docExpansion="list" deepLinking />}
    </>
  );
};
