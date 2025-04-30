import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { SwaggerUIBundle } from 'swagger-ui-dist';
import { LoadingSpec } from '../components/LoadingSpec';
import type { LoadingTagsResult } from '../helpers';
import { useShlinkSpec } from '../helpers';

export const SwaggerPage: FC<{ tagsResult: LoadingTagsResult }> = ({ tagsResult }) => {
  const { tags, error } = tagsResult;
  const swaggerRef = useRef<HTMLDivElement>(null);
  const spec = useShlinkSpec('swagger', tags);

  useEffect(() => {
    SwaggerUIBundle({
      domNode: swaggerRef.current,
      spec,
      deepLinking: true,
    });
  }, [spec]);

  return !spec ? <LoadingSpec withError={error} /> : <div className="swagger-ui-wrapper" ref={swaggerRef} />;
};
