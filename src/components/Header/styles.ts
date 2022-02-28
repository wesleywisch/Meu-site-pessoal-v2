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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 4fr 1fr;
  }
`;

export const HeaderName = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem;

  h1{
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
  }

  @media screen and (max-width: 470px) {
    justify-content: flex-start;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${props => props.theme.colors.white};
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

  @media screen and (max-width: 768px) {
    display: none;
  }
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