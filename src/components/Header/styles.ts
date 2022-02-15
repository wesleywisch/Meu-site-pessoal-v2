import styled from "styled-components";

type NavLinkProps = {
  isActive: boolean;
}

export const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid ${props => props.theme.colors.backgroundLight};
`;

export const HeaderName = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem;

  h1{
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const HeaderSwitch = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem;
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-decoration: uppercase;
    color: ${props => props.isActive ?
      props.theme.colors.primary :
      props.theme.colors.textHighlight
    };
    transition: .5s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;