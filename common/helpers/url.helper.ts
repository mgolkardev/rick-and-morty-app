export const getIdFromUrls = (urls?: string[]): number[] => {
  return (
    urls?.map((url) => {
      let lastUrlPart = /.*\/([^?]+)/.exec(url);
      return lastUrlPart ? +lastUrlPart[1] : 0;
    }) ?? []
  );
};
