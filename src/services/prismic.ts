import * as prismic from '@prismicio/client';

const endpoint = prismic.getEndpoint('my-portfolio-wesley');

export const client = prismic.createClient(endpoint, {
  fetch: fetch,
  accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN as string,
});
