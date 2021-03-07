import { PostsTemplateProps } from '.';
import { data } from '../../api/dados.json';

export default {
  settings: data.setting,
  posts: data.posts,
} as PostsTemplateProps;
