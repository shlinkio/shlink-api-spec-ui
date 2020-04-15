import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter, useShlinkTags } from '../helpers';
import LoadingSpec from '../components/LoadingSpec';
import SwaggerContainer from '../components/SwaggerContainer';
import Layout from '../components/Layout';
import './index.css';

const Home: FunctionComponent = () => {
  const { query } = useRouter();
  const [ url, setUrl ] = useState<string | undefined>();
  const { tags, error } = useShlinkTags();

  useEffect(() => {
    const { version } = query;
    const versionToLoad = version || tags[0];

    if (versionToLoad) {
      setUrl(`https://raw.githubusercontent.com/shlinkio/shlink/${versionToLoad}/docs/swagger/swagger.json`);
    }
  }, [ query, tags ]);

  return (
    <Layout tags={tags}>
      {!url || error ? <LoadingSpec withError={error} /> : <SwaggerContainer url={url} />}
    </Layout>
  );
};

export default Home;
