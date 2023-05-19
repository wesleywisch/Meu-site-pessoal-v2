import styled from "styled-components";

export const ProjetosContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8rem;

  margin: 0 auto;
  max-width: 85rem;
  padding: 0 1rem;

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

    @media screen and (max-width: 1450px) {
      max-width: 70rem;
    }

    @media screen and (max-width: 1000px) {
      max-width: 50rem;
    }

    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }

  > div {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
`;