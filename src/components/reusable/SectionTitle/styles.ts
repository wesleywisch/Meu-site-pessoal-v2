import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;

  h2{
    color: ${props => props.theme.colors.primary};
    font-size: 4.5rem;
  }

  p{
    color: ${props => props.theme.colors.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media screen and (max-width: 1000px){
    h2{
      font-size: 2.5rem;
    }

    p{
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 500px){
    h2{
      font-size: 1.8rem;
    }

    p{
      font-size: 1.2rem;
    }
  }
`;