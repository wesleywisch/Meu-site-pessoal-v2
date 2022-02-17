import styled from "styled-components";

type KnowledgeCardContainerProps = {
  colorIcon: string;
}

export const KnowledgeCardContainer = styled.div<KnowledgeCardContainerProps>`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  justify-content: center;
  align-items: center;

  p{
    color: ${props => props.colorIcon};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg{
    width: 6.5rem;
    height: 6.5rem;
    color: ${props => props.colorIcon};
    transition: .8s;
  }

  &:hover{
    svg {
      filter: brightness(1.2);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg{
      width: 5rem;
      height: 5rem;
    }
  }
`;