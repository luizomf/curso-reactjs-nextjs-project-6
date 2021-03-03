import * as Styled from './styles';
import { TextComponent } from '../TextComponent';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <TextComponent>{footerHtml}</TextComponent>
    </Styled.Container>
  );
};
