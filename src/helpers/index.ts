import { ParsedUrlQuery, parse } from 'querystring';
import { useEffect, useState } from 'react';
import { compare } from 'compare-versions';
import { useLocation, useNavigate } from 'react-router';

const SHLINK_TAGS_ENDPOINT = 'https://api.github.com/repos/shlinkio/shlink/tags';

interface Tag {
  name: string;
}

const loadTags = async (): Promise<string[]> =>
  fetch(SHLINK_TAGS_ENDPOINT)
    .then(async (res) => res.json())
    .then((tags: Tag[]) => tags.map(({ name }) => name));

export const useRouter = () => {
  const { search, pathname } = useLocation();
  const push = useNavigate();
  const navigate = async (url: string) => {
    const processedUrl = url.startsWith('/') ? url : `${pathname}${url}`;
    return push(processedUrl);
  };

  return { navigate, query: parse(search), pathname };
};

export const useShlinkTags = (): { tags: string[]; error: boolean } => {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadTags()
      .then(setTags)
      .catch(() => setError(true));
  }, []);

  return { tags, error };
};

export const useResolveVersion = (query: ParsedUrlQuery, tags: string[]): string | undefined => {
  const [resolvedVersion, setResolvedVersion] = useState<string | undefined>();

  useEffect(() => {
    const { version } = query;
    const stringVersion = version as string | undefined;

    setResolvedVersion(stringVersion ?? tags.find((tag) => !tag.includes('alpha') && !tag.includes('beta')));
  }, [query, tags]);

  return resolvedVersion;
};

const resolveSwaggerUrl = (version: string) => (compare('v2.2.0', version, '>')
  ? `https://raw.githubusercontent.com/shlinkio/shlink/${version}/docs/swagger/swagger.json`
  : `https://raw.githubusercontent.com/shlinkio/shlink-open-api-specs/main/specs/${version}/open-api-spec.json`);

const resolveSpecUrl = (version: string, type: 'swagger' | 'async-api') => (type === 'swagger'
  ? resolveSwaggerUrl(version)
  : `https://raw.githubusercontent.com/shlinkio/shlink/${version}/docs/async-api/async-api.json`);

export const useShlinkSpecUrl = (type: 'swagger' | 'async-api'): {
  url: string | undefined;
  versionToLoad: string | undefined;
  tags: string[];
  tagsError: boolean;
} => {
  const { query } = useRouter();
  const [url, setUrl] = useState<string | undefined>();
  const [versionToLoad, setVersionToLoad] = useState<string | undefined>();
  const { tags, error } = useShlinkTags();
  const resolvedVersion = useResolveVersion(query, tags);

  useEffect(() => {
    if (resolvedVersion) {
      setVersionToLoad((resolvedVersion as string | undefined)?.substring(1));
      setUrl(resolveSpecUrl(resolvedVersion, type));
    }
  }, [resolvedVersion]);

  return { url, versionToLoad, tags, tagsError: error };
};
