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
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        <b>
          Children
        </b>
      </div>
    `);
  });
});
