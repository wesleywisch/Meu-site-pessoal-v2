import styled from "styled-components";

export const ExperienceCardContainer = styled.div`
  &:hover > div{
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div{
    margin-top: 4rem;
  }

  > div {
    background: ${props => props.theme.colors.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: .5s;

    button {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 2rem;
      align-items: flex-end;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      color: ${props => props.theme.colors.white};
      font-weight: bold;
      text-align: center;
    }

    h3{
      color: ${props => props.theme.colors.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h4{
      color: ${props => props.theme.colors.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p{
      color: ${props => props.theme.colors.textLight};
      font-size: 1rem;
      font-weight: 300;
    }
  }

  @media screen and (max-width: 1000px){
    > div {
      height: 22rem;
      padding-top: 1.5rem;

      h3{
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h4{
        font-size: 1rem;
      }

      p{
        font-size: .9rem;
      }

      button {
        font-size: .9rem;
      }
    }
  }

  @media screen and (max-width: 700px){
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div{
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;

      h3{
        font-size: 2rem;
      }

      h4{
        font-size: 1.5rem;
      }

      p{
        font-size: 1rem;
      }

      button {
        font-size: 1.2rem;
      }
    }
  }
`;