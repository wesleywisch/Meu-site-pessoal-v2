import styled from "styled-components";

export const VisualizationOfAProjectContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > div.carrying {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.secondary};
        text-align: center;
      }
    }

  > div.content {
    margin: 2rem 0;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${props => props.theme.colors.textLight};
      font-weight: 300;
      font-size: 1.5rem;
      text-align: justify;
    }

    button {
      border: 2px solid ${props => props.theme.colors.primary};
      background: transparent;
      padding: .8rem 3rem;
      border-radius: .5rem;
      transition: .5s;
      margin-top: 2rem;

      &:hover {
        filter: brightness(0.8);
      }

      a {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 300;
        display: flex;
        align-items: center;

        svg.github {
          margin-right: .5rem;
        }

        svg.sites {
          margin-left: .5rem;
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    @media screen and (max-width: 700px){
      padding: 0 2.5rem;

      p{
        font-size: 1rem;
      }

      button {
        padding: .7rem 2rem;

        a {
          font-size: .9rem;
        }
      }
    }

    @media screen and (max-width: 340px) {
      button {
        a {
          font-size: .8rem;
        }
      }
    }
  }
`;