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

  > div.date {
    padding: 1rem 5rem;
    font-size: 1rem;
    color: gray;

    @media screen and (max-width: 700px) {
      padding: 1rem 2.5rem;
    }

    @media screen and (max-width: 340px) {
      font-size: 0.9rem
    }
  }

  > section.content {
    margin: 2rem 0;
    width: 100%;
    padding: 0 5rem;

    h2 {
      font-size: 1.5rem;
      color: ${props => props.theme.colors.secondary};
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${props => props.theme.colors.textLight};
      font-weight: 300;
      font-size: 1.5rem;
      text-align: justify;
    }

   > section.tech {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
      width: 100%;
      height: auto;
      
      h2 {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.secondary};
        font-weight: 300;
        margin-bottom: 1rem;
      }
      
      ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        gap: 1rem;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          font-size: 1rem;
          color: ${props => props.theme.colors.white};
          padding: .5rem 1rem;
          background: transparent;
          border: 2px solid ${props => props.theme.colors.primary}; 
          border-radius: 1rem;
          transition: 1s;

          &:hover {
            color: ${props => props.theme.colors.background};
            background: ${props => props.theme.colors.primary};
            font-weight: 400;
            opacity: .8;
            box-shadow: 0px 0px 12px 1px #0EE7B7;
            -webkit-box-shadow: 0px 0px 12px 1px #0EE7B7; 
          }
        }
      }
    }

    div.buttonLink { 
      display: flex;
      align-items: center;

      button {
        width: 28rem;
        border: 2px solid ${props => props.theme.colors.primary};
        background: transparent;
        padding: .8rem 3rem;
        border-radius: .5rem;
        transition: .5s;
        margin-top: 2rem;
        transition: 1s;

        &:hover {
          box-shadow: 0px 0px 12px 1px #0EE7B7;
          -webkit-box-shadow: 0px 0px 12px 1px #0EE7B7;
        }

        a {
          text-transform: uppercase;
          color: ${props => props.theme.colors.white};
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

      button + button {
        margin-left: 1rem;
      }

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-start;

        button + button {
          margin-left: 0;
          margin-top: 1rem;
        }
      }

      @media screen and (max-width: 700px){
        button {
          width: 19rem;
          padding: .7rem 2rem;

          a {
            font-size: .9rem;
          }
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