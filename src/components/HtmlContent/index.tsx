import Prism from 'prismjs';
import * as Styled from './styles';
import { PrismWrapper } from './prism-vscode-dark';
import { useEffect } from 'react';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    let removeAds = null;
    if (typeof window !== 'undefined') {
      Prism.highlightAll();

      removeAds = setTimeout(() => {
        document
          .querySelectorAll('iframe[src*=ads]')
          .forEach((el) => el.remove());
      }, 1000);
    }

    return () => clearTimeout(removeAds);
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
    </PrismWrapper>
  );
};
