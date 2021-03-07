import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    id
    alternativeText
    url
  }

  fragment cover on Post {
    cover {
      ...image
    }
  }

  fragment tag on Tag {
    id
    displayName
    slug
  }

  fragment author on Author {
    id
    displayName
    slug
  }

  fragment category on Category {
    id
    displayName
    slug
  }

  fragment tags on Post {
    tags {
      ...tag
    }
  }

  fragment authorPost on Post {
    author {
      ...author
    }
  }

  fragment categories on Post {
    categories {
      ...category
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment post on Post {
    id
    slug
    title
    excerpt
    content
    createdAt
    allowComments
    ...cover
    ...categories
    ...tags
    ...authorPost
  }

  fragment settings on Settings {
    id
    blogName
    blogDescription
    logo {
      ...image
    }
    menuLink {
      ...menuLink
    }
    text
  }
`;
