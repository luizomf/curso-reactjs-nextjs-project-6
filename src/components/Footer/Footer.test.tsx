import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        font-size: 2.4rem;
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
