// Prefixes a site path with the base path, so links work on github.io and on a custom domain.
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
