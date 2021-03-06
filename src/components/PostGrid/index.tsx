import * as Styled from './styles';

export type PostGridProps = {
  title?: string;
};

export const PostGrid = ({ title }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
