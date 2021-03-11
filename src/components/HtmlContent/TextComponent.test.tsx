import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html={'<b>Children</b>'} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c1 iframe[src*='ads'] {
        display: none;
      }

      .c1 p {
        margin: 2.4rem 0;
      }

      .c1 a,
      .c1 a:visited,
      .c1 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c1 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c1 img {
        max-width: 100%;
      }

      .c1 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 2.4rem 0;
      }

      .c1 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c1 .image-style-side {
        max-width: 50%;
        float: right;
        margin: 2.4rem 0;
      }

      .c1 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c1 ul,
      .c1 ol {
        margin: 2.4rem 4.0rem;
      }

      .c1 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c1 table {
        width: 100%;
        border-collapse: collapse;
        margin: 2.4rem 0;
      }

      .c1 table td,
      .c1 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c1 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      .c0 pre[class*='language-'],
      .c0 code[class*='language-'] {
        color: #d4d4d4;
        font-size: 13px;
        text-shadow: none;
        font-family: Menlo,Monaco,Consolas,'Andale Mono','Ubuntu Mono','Courier New',monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      .c0 pre[class*='language-']::selection,
      .c0 code[class*='language-']::selection,
      .c0 pre[class*='language-'] *::selection,
      .c0 code[class*='language-'] *::selection {
        text-shadow: none;
        background: #75a7ca;
      }

      .c0 pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
        background: #1e1e1e;
      }

      .c0:not(pre) > code[class*='language-'] {
        padding: 0.1em 0.3em;
        border-radius: 0.3em;
        color: #db4c69;
        background: #f9f2f4;
      }

      .c0 .namespace {
        opacity: 0.7;
      }

      .c0 .token.doctype .token.doctype-tag {
        color: #569cd6;
      }

      .c0 .token.doctype .token.name {
        color: #9cdcfe;
      }

      .c0 .token.comment,
      .c0 .token.prolog {
        color: #6a9955;
      }

      .c0 .token.punctuation,
      .c0 .language-html .language-css .token.punctuation,
      .c0 .language-html .language-javascript .token.punctuation {
        color: #d4d4d4;
      }

      .c0 .token.property,
      .c0 .token.tag,
      .c0 .token.boolean,
      .c0 .token.number,
      .c0 .token.constant,
      .c0 .token.symbol,
      .c0 .token.inserted,
      .c0 .token.unit {
        color: #b5cea8;
      }

      .c0 .token.selector,
      .c0 .token.attr-name,
      .c0 .token.string,
      .c0 .token.char,
      .c0 .token.builtin,
      .c0 .token.deleted {
        color: #ce9178;
      }

      .c0 .language-css .token.string.url {
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      .c0 .token.operator,
      .c0 .token.entity {
        color: #d4d4d4;
      }

      .c0 .token.operator.arrow {
        color: #569cd6;
      }

      .c0 .token.atrule {
        color: #ce9178;
      }

      .c0 .token.atrule .token.rule {
        color: #c586c0;
      }

      .c0 .token.atrule .token.url {
        color: #9cdcfe;
      }

      .c0 .token.atrule .token.url .token.function {
        color: #dcdcaa;
      }

      .c0 .token.atrule .token.url .token.punctuation {
        color: #d4d4d4;
      }

      .c0 .token.keyword {
        color: #569cd6;
      }

      .c0 .token.keyword.module,
      .c0 .token.keyword.control-flow {
        color: #c586c0;
      }

      .c0 .token.function,
      .c0 .token.function .token.maybe-class-name {
        color: #dcdcaa;
      }

      .c0 .token.regex {
        color: #d16969;
      }

      .c0 .token.important {
        color: #569cd6;
      }

      .c0 .token.italic {
        font-style: italic;
      }

      .c0 .token.constant {
        color: #9cdcfe;
      }

      .c0 .token.class-name,
      .c0 .token.maybe-class-name {
        color: #4ec9b0;
      }

      .c0 .token.console {
        color: #9cdcfe;
      }

      .c0 .token.parameter {
        color: #9cdcfe;
      }

      .c0 .token.interpolation {
        color: #9cdcfe;
      }

      .c0 .token.punctuation.interpolation-punctuation {
        color: #569cd6;
      }

      .c0 .token.boolean {
        color: #569cd6;
      }

      .c0 .token.property,
      .c0 .token.variable,
      .c0 .token.imports .token.maybe-class-name,
      .c0 .token.exports .token.maybe-class-name {
        color: #9cdcfe;
      }

      .c0 .token.selector {
        color: #d7ba7d;
      }

      .c0 .token.escape {
        color: #d7ba7d;
      }

      .c0 .token.tag {
        color: #569cd6;
      }

      .c0 .token.tag .token.punctuation {
        color: #808080;
      }

      .c0 .token.cdata {
        color: #808080;
      }

      .c0 .token.attr-name {
        color: #9cdcfe;
      }

      .c0 .token.attr-value,
      .c0 .token.attr-value .token.punctuation {
        color: #ce9178;
      }

      .c0 .token.attr-value .token.punctuation.attr-equals {
        color: #d4d4d4;
      }

      .c0 .token.entity {
        color: #569cd6;
      }

      .c0 .token.namespace {
        color: #4ec9b0;
      }

      .c0 pre[class*='language-javascript'],
      .c0 code[class*='language-javascript'],
      .c0 pre[class*='language-jsx'],
      .c0 code[class*='language-jsx'],
      .c0 pre[class*='language-typescript'],
      .c0 code[class*='language-typescript'],
      .c0 pre[class*='language-tsx'],
      .c0 code[class*='language-tsx'] {
        color: #9cdcfe;
      }

      .c0 pre[class*='language-css'],
      .c0 code[class*='language-css'] {
        color: #ce9178;
      }

      .c0 pre[class*='language-html'],
      .c0 code[class*='language-html'] {
        color: #d4d4d4;
      }

      .c0 .language-regex .token.anchor {
        color: #dcdcaa;
      }

      .c0 .language-html .token.punctuation {
        color: #808080;
      }

      .c0 pre[data-line] {
        position: relative;
      }

      .c0 pre[class*='language-'] > code[class*='language-'] {
        position: relative;
        z-index: 1;
      }

      .c0 .line-highlight {
        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1em;
        background: #f7ebc6;
        box-shadow: inset 5px 0 0 #f7d87c;
        z-index: 0;
        pointer-events: none;
        line-height: inherit;
        white-space: pre;
      }

      @media (max-width:768px) {
        .c1 {
          font-size: 2rem;
        }

        .c1 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      @media print {
        .c0 pre[class*='language-'],
        .c0 code[class*='language-'] {
          text-shadow: none;
        }
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <b>
            Children
          </b>
        </div>
      </div>
    `);
  });
});
