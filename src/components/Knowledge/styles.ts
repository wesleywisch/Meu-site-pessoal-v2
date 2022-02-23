import styled from "styled-components";

export const KnowledgeContainer = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5rem;
    gap: 8rem;

    @media screen and (max-width: 1000px) {
      gap: 5rem;
    }

    @media screen and (max-width: 700px) {
      gap: 3rem;
    }
  }
`;