import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};
