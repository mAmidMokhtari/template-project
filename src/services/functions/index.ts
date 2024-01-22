export const bToA = (obj: object) => {
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
};
