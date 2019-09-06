const SHLINK_TAGS_ENDPOINT = 'https://api.github.com/repos/shlinkio/shlink/tags';

interface Tag {
  name: string;
}

export const loadTags = async (): Promise<string[]> =>
  fetch(SHLINK_TAGS_ENDPOINT)
    .then(async (res) => res.json())
    .then((tags: Tag[]) => tags.map(({ name }) => name));

export const determineActiveTag = ({ location }: Window, tags: string[]): string => {
  const query = new URLSearchParams(location.search);
  const versionFromQuery = query.get('version');

  if (versionFromQuery && tags.includes(versionFromQuery)) {
    return versionFromQuery;
  }

  return tags[0] || '';
};
