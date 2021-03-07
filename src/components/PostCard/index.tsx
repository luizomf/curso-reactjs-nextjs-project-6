import Link from 'next/link';
import { StrapiImage } from '../../shared-types/strapi-image';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={title} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
