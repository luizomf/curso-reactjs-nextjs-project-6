import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERY } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';
import { SettingsStrapi } from '../shared-types/settings-strapi';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const defaultLoadPostsVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 6,
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultLoadPostsVariables,
    ...variables,
  });

  return data;
};
