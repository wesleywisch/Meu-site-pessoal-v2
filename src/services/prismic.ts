import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(process.env.REACT_APP_PRISMIC_API_ENDPOINT as string, {
    req,
    accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN as string
  })

  return prismic;
}