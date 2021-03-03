import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(<MenuLink link="/localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        color: #FFFFFF;
        -webkit-text-decoration: none;
        text-decoration: none;
        margin-bottom: 1.6rem;
        font-size: 1.8rem;
        border-right: 0.5rem solid #000000;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover {
        border-right: 0.5rem solid #dc143c;
        color: #dc143c;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
