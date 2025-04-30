import { compare } from 'compare-versions';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import type { Spec } from 'swagger-ui-dist';

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

  return { navigate, query: new URLSearchParams(search), pathname };
};

export interface LoadingTagsResult {
  tags: string[];
  error: boolean;
}

export const useShlinkTags = (): LoadingTagsResult => {
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadTags()
      .then(setTags)
      .catch(() => setError(true));
  }, []);

  return { tags, error };
};

export const useResolveVersion = (query: URLSearchParams, tags: string[]): string | undefined => {
  const [resolvedVersion, setResolvedVersion] = useState<string | undefined>();

  useEffect(() => {
    const version = query.get('version');
    setResolvedVersion(version ?? tags.find((tag) => !tag.includes('alpha') && !tag.includes('beta')));
  }, [query, tags]);

  return resolvedVersion;
};

const resolveSwaggerUrl = (version: string) => (compare('v2.2.0', version, '>')
  ? `https://raw.githubusercontent.com/shlinkio/shlink/${version}/docs/swagger/swagger.json`
  : `https://raw.githubusercontent.com/shlinkio/shlink-open-api-specs/main/specs/${version}/open-api-spec.json`);

const resolveSpecUrl = (version: string, type: 'swagger' | 'async-api') => (type === 'swagger'
  ? resolveSwaggerUrl(version)
  : `https://raw.githubusercontent.com/shlinkio/shlink/${version}/docs/async-api/async-api.json`);

export const useShlinkSpecUrl = (type: 'swagger' | 'async-api', tags: string[]): {
  url: string | undefined;
  versionToLoad: string | undefined;
} => {
  const { query } = useRouter();
  const [url, setUrl] = useState<string | undefined>();
  const [versionToLoad, setVersionToLoad] = useState<string | undefined>();
  const resolvedVersion = useResolveVersion(query, tags);

  useEffect(() => {
    if (resolvedVersion) {
      setVersionToLoad(resolvedVersion.substring(1));
      setUrl(resolveSpecUrl(resolvedVersion, type));
    }
  }, [resolvedVersion, type]);

  return { url, versionToLoad };
};

export const useShlinkSpec = (type: 'swagger' | 'async-api', tags: string[]): Spec | undefined => {
  const { url } = useShlinkSpecUrl(type, tags);
  const [spec, setSpec] = useState<Spec>();

  useEffect(() => {
    if (url) {
      fetch(url).then((resp) => resp.json()).then(setSpec);
    }
  }, [url]);

  return spec;
};
