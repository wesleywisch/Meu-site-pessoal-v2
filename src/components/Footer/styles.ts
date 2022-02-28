import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${props => props.theme.colors.backgroundLight};
  height: 5rem;
  justify-content: center;
  align-items: center;

  > div {
    padding: 0 1rem;
    width: 100%;
    max-width: 85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      background: none;
      border: none;
      color: ${props => props.theme.colors.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        svg{
          width: 2rem;
          height: 2rem;
          color: ${props => props.theme.colors.text};
          transition: .5s;
          cursor: pointer;

          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }

    @media screen and (max-width: 1450px) {
      max-width: 70rem;
    }

    @media screen and (max-width: 1000px) {
      max-width: 50rem;
    }

    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }

    @media screen and (max-width: 450px) {
      button {
        font-size: .9rem;
      }

      > section {
        gap: .5rem;

        a {
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
`;