import * as Styled from './styles';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
