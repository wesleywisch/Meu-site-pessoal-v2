import styled from "styled-components";

type ProjectsCardContainerProps = {
  imgUrl: string;
}

export const ProjectsCardContainer = styled.div<ProjectsCardContainerProps>`
  > a {
    position: relative;
    width: 100%;
    height: 10rem;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    padding: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: .5rem;
    border: 1px solid ${props => props.theme.colors.border};
    transition: .5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${props => props.theme.colors.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;

      h2 {
        color: ${props => props.theme.colors.primary};
        font-size: 1.5rem;
      }

      p {
        color: ${props => props.theme.colors.secondary};
        font-weight: 300;
        font-size: 1rem;
      }
    }
   
    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.gradient};
      opacity: 0.7;
      transition: .5s;
    }
  }
`; 