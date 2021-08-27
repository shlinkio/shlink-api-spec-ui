import { ParsedUrlQuery } from 'querystring';
import { useRouter as useNextRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SHLINK_TAGS_ENDPOINT = 'https://api.github.com/repos/shlinkio/shlink/tags';

interface Tag {
  name: string;
}

const loadTags = async (): Promise<string[]> =>
  fetch(SHLINK_TAGS_ENDPOINT)
    .then(async (res) => res.json())
    .then((tags: Tag[]) => tags.map(({ name }) => name));

export const useRouter = () => {
  const { push, query, pathname } = useNextRouter();
  const navigate = async (url: string) => {
    const processedUrl = url.startsWith('/') ? url : `${pathname}${url}`;

    return push(processedUrl, processedUrl, { shallow: true });
  };

  return { navigate, query, pathname };
};

export const useShlinkTags = (): { tags: string[]; error: boolean } => {
  const [ tags, setTags ] = useState([] as string[]);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    loadTags()
      .then(setTags)
      .catch(() => setError(true));
  }, []);

  return { tags, error };
};

export const useResolveVersion = (query: ParsedUrlQuery, tags: string[]): string | undefined => {
  const [ resolvedVersion, setResolvedVersion ] = useState('');

  useEffect(() => {
    const { version } = query;

    setResolvedVersion(`${version ?? tags.find((tag) => !tag.includes('alpha') && !tag.includes('beta'))}`);
  }, [ query, tags ]);

  return resolvedVersion;
};

export const useShlinkSpecUrl = (type: 'swagger' | 'async-api'): {
  url: string | undefined;
  versionToLoad: string | undefined;
  tags: string[];
  tagsError: boolean;
} => {
  const { query } = useRouter();
  const [ url, setUrl ] = useState<string | undefined>();
  const [ versionToLoad, setVersionToLoad ] = useState<string | undefined>();
  const { tags, error } = useShlinkTags();
  const resolvedVersion = useResolveVersion(query, tags);

  useEffect(() => {
    if (resolvedVersion) {
      setVersionToLoad((resolvedVersion as string | undefined)?.substring(1));
      setUrl(`https://raw.githubusercontent.com/shlinkio/shlink/${resolvedVersion}/docs/${type}/${type}.json`);
    }
  }, [ resolvedVersion ]);

  return { url, versionToLoad, tags, tagsError: error };
};
