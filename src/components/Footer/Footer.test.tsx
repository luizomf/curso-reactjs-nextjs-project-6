import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: calc(1.6rem + 0.2rem);
        line-height: 1.5;
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

      .c1 code {
        font-family: monospace;
        color: #dc143c;
        font-size: 1.6rem;
        background: #DDDDDD;
        padding: 0.2rem;
        margin: 0.2rem;
      }

      .c1 pre {
        background: #000000;
        padding: 2.4rem;
        font-family: monospace;
        color: #FFFFFF;
        margin: 2.4rem 0;
        width: 100%;
        overflow-x: auto;
        font-size: 1.6rem;
      }

      .c1 pre code {
        color: inherit;
        background: inherit;
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
        .c1 {
          font-size: 2rem;
        }

        .c1 .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <h1>
              Olá
            </h1>
          </div>
        </footer>
      </div>
    `);
  });
});
