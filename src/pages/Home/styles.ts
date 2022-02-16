import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8rem;

    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;

    @media screen and (max-width: 1450px) {
      max-width: 70rem;
    }

    @media screen and (max-width: 1000px) {
      max-width: 50rem;
    }

    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }
  }
`;