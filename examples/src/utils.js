import { parse } from 'qs';

export const parseQueryString = () => {
  const parsedData = parse(document.location.search, { ignoreQueryPrefix: true });
  if (parsedData && Object.keys(parsedData).length) {
    return {
      file: parsedData.file,
      fetchOptions: {
        withCredentials: parsedData.isCORSEnabled === 'true',
      },
    };
  }

  return null;
};
