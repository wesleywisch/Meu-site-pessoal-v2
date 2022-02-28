import styled from "styled-components";

export const ExperienceContainer = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${props => props.theme.colors.primary};

    @media screen and (max-width: 1000px) {
      gap: 1rem;
    }

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;