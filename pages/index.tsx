import React, { FunctionComponent, useEffect, useState } from 'react';
import LoadingSpec from '../components/LoadingSpec';
import SwaggerContainer from '../components/SwaggerContainer';
import './index.css';

const SHLINK_TAGS_ENDPOINT = 'https://api.github.com/repos/shlinkio/shlink/tags';

interface Tag {
  name: string;
}

const Home: FunctionComponent = () => {
  const [ url, setUrl ] = useState('');
  const [ tags, setTags ] = useState([] as string[]);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    fetch(SHLINK_TAGS_ENDPOINT)
      .then(async (tags) => tags.json())
      .then((tags: Tag[]) => tags.map(({ name }) => name))
      .then((tags: string[]) => {
        const [ firstTag ] = tags;

        setTags(tags);
        setUrl(`https://raw.githubusercontent.com/shlinkio/shlink/${firstTag}/docs/swagger/swagger.json`);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <div>
      {url === '' ? <LoadingSpec /> : <SwaggerContainer url={url} setUrl={setUrl} tags={tags} />}
      {error && <span>An error occurred</span>}
    </div>
  );
};

export default Home;
