import { PostProps } from '../components/Post';
import { PostTagsProps } from '../components/PostTags';

export type PostStrapi = PostProps & {
  tags: PostTagsProps;
  slug: string;
};
