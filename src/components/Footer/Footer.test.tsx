import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c2 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
      }

      .c2 iframe[src*='ads'] {
        display: none;
      }

      .c2 p {
        margin: 2.4rem 0;
      }

      .c2 a,
      .c2 a:visited,
      .c2 a:link {
        color: #dc143c;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c2 a:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
      }

      .c2 img {
        max-width: 100%;
      }

      .c2 .image {
        background: #DDDDDD;
        line-height: 0;
        margin: 2.4rem 0;
      }

      .c2 .image figcaption {
        font-size: 1.6rem;
        padding: 1.6rem;
        text-align: center;
        line-height: 1.3;
      }

      .c2 .image-style-side {
        max-width: 50%;
        float: right;
        margin: 2.4rem 0;
      }

      .c2 hr {
        border: none;
        border-bottom: 0.1rem solid #DDDDDD;
      }

      .c2 ul,
      .c2 ol {
        margin: 2.4rem 4.0rem;
      }

      .c2 .table {
        width: 100%;
        overflow: hidden;
        overflow-x: auto;
      }

      .c2 table {
        width: 100%;
        border-collapse: collapse;
        margin: 2.4rem 0;
      }

      .c2 table td,
      .c2 table th {
        padding: 1.6rem;
        border: 0.1rem solid #DDDDDD;
      }

      .c2 blockquote {
        border-left: 0.5rem solid #dc143c;
        color: #AAAAAA;
        -webkit-filter: brightness(80%);
        filter: brightness(80%);
        padding-left: 2.4rem;
        font-style: italic;
        margin: 2.4rem;
      }

      .c1 pre[class*='language-'],
      .c1 code[class*='language-'] {
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

      .c1 pre[class*='language-']::selection,
      .c1 code[class*='language-']::selection,
      .c1 pre[class*='language-'] *::selection,
      .c1 code[class*='language-'] *::selection {
        text-shadow: none;
        background: #75a7ca;
      }

      .c1 pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
        background: #1e1e1e;
      }

      .c1:not(pre) > code[class*='language-'] {
        padding: 0.1em 0.3em;
        border-radius: 0.3em;
        color: #db4c69;
        background: #f9f2f4;
      }

      .c1 .namespace {
        opacity: 0.7;
      }

      .c1 .token.doctype .token.doctype-tag {
        color: #569cd6;
      }

      .c1 .token.doctype .token.name {
        color: #9cdcfe;
      }

      .c1 .token.comment,
      .c1 .token.prolog {
        color: #6a9955;
      }

      .c1 .token.punctuation,
      .c1 .language-html .language-css .token.punctuation,
      .c1 .language-html .language-javascript .token.punctuation {
        color: #d4d4d4;
      }

      .c1 .token.property,
      .c1 .token.tag,
      .c1 .token.boolean,
      .c1 .token.number,
      .c1 .token.constant,
      .c1 .token.symbol,
      .c1 .token.inserted,
      .c1 .token.unit {
        color: #b5cea8;
      }

      .c1 .token.selector,
      .c1 .token.attr-name,
      .c1 .token.string,
      .c1 .token.char,
      .c1 .token.builtin,
      .c1 .token.deleted {
        color: #ce9178;
      }

      .c1 .language-css .token.string.url {
        -webkit-text-decoration: underline;
        text-decoration: underline;
      }

      .c1 .token.operator,
      .c1 .token.entity {
        color: #d4d4d4;
      }

      .c1 .token.operator.arrow {
        color: #569cd6;
      }

      .c1 .token.atrule {
        color: #ce9178;
      }

      .c1 .token.atrule .token.rule {
        color: #c586c0;
      }

      .c1 .token.atrule .token.url {
        color: #9cdcfe;
      }

      .c1 .token.atrule .token.url .token.function {
        color: #dcdcaa;
      }

      .c1 .token.atrule .token.url .token.punctuation {
        color: #d4d4d4;
      }

      .c1 .token.keyword {
        color: #569cd6;
      }

      .c1 .token.keyword.module,
      .c1 .token.keyword.control-flow {
        color: #c586c0;
      }

      .c1 .token.function,
      .c1 .token.function .token.maybe-class-name {
        color: #dcdcaa;
      }

      .c1 .token.regex {
        color: #d16969;
      }

      .c1 .token.important {
        color: #569cd6;
      }

      .c1 .token.italic {
        font-style: italic;
      }

      .c1 .token.constant {
        color: #9cdcfe;
      }

      .c1 .token.class-name,
      .c1 .token.maybe-class-name {
        color: #4ec9b0;
      }

      .c1 .token.console {
        color: #9cdcfe;
      }

      .c1 .token.parameter {
        color: #9cdcfe;
      }

      .c1 .token.interpolation {
        color: #9cdcfe;
      }

      .c1 .token.punctuation.interpolation-punctuation {
        color: #569cd6;
      }

      .c1 .token.boolean {
        color: #569cd6;
      }

      .c1 .token.property,
      .c1 .token.variable,
      .c1 .token.imports .token.maybe-class-name,
      .c1 .token.exports .token.maybe-class-name {
        color: #9cdcfe;
      }

      .c1 .token.selector {
        color: #d7ba7d;
      }

      .c1 .token.escape {
        color: #d7ba7d;
      }

      .c1 .token.tag {
        color: #569cd6;
      }

      .c1 .token.tag .token.punctuation {
        color: #808080;
      }

      .c1 .token.cdata {
        color: #808080;
      }

      .c1 .token.attr-name {
        color: #9cdcfe;
      }

      .c1 .token.attr-value,
      .c1 .token.attr-value .token.punctuation {
        color: #ce9178;
      }

      .c1 .token.attr-value .token.punctuation.attr-equals {
        color: #d4d4d4;
      }

      .c1 .token.entity {
        color: #569cd6;
      }

      .c1 .token.namespace {
        color: #4ec9b0;
      }

      .c1 pre[class*='language-javascript'],
      .c1 code[class*='language-javascript'],
      .c1 pre[class*='language-jsx'],
      .c1 code[class*='language-jsx'],
      .c1 pre[class*='language-typescript'],
      .c1 code[class*='language-typescript'],
      .c1 pre[class*='language-tsx'],
      .c1 code[class*='language-tsx'] {
        color: #9cdcfe;
      }

      .c1 pre[class*='language-css'],
      .c1 code[class*='language-css'] {
        color: #ce9178;
      }

      .c1 pre[class*='language-html'],
      .c1 code[class*='language-html'] {
        color: #d4d4d4;
      }

      .c1 .language-regex .token.anchor {
        color: #dcdcaa;
      }

      .c1 .language-html .token.punctuation {
        color: #808080;
      }

      .c1 pre[data-line] {
        position: relative;
      }

      .c1 pre[class*='language-'] > code[class*='language-'] {
        position: relative;
        z-index: 1;
      }

      .c1 .line-highlight {
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

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      @media (max-width:768px) {
        .c2 {
          font-size: 2rem;
        }

        .c2 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      @media print {
        .c1 pre[class*='language-'],
        .c1 code[class*='language-'] {
          text-shadow: none;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class="c2"
            >
              <h1>
                Olá
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
