import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: String = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      ...settings
    }

    posts(
      start: $start
      limit: $limit
      sort: $sort
      where: {
        slug: $postSlug
        _or: [
          { title_contains: $postSearch }
          { content_contains: $postSearch }
          { excerpt_contains: $postSearch }
        ]
        categories: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
      }
    ) {
      ...post
    }
  }
`;
