import styled from "styled-components";

export const LatestProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media screen and (max-width: 1000px) {
      gap: 2rem;
    }
  }

  > button {
    background: ${props => props.theme.colors.primary};
    padding: .8rem 3rem;
    border-radius: .5rem;
    border: none;
    transition: .5s;

    &:hover {
      filter: brightness(1.07);
    }

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media screen and (max-width: 500px) {
      padding: 1rem;

      a {
        font-size: 1rem;
      }
    }
  }
`;