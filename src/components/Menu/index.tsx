import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links, blogName, logo }: MenuProps) => {
  return (
    <>
      <Styled.OpenClose
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
      >
        <MenuIcon aria-label="Open menu" />
      </Styled.OpenClose>

      <Styled.Wrapper>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>

          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
