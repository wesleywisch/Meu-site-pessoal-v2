import styled from "styled-components";

type BannerProjectContainerProps = {
  imgUrl: string
}

export const BannerProjectContainer = styled.div<BannerProjectContainerProps>`
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  button {
    position: absolute;
    top: 1rem;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    
    svg {
      font-size: 2rem;
      color: #fff;

      path {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  section {
    z-index: 2;

    h2 {
      color: ${props => props.theme.colors.primary};
      font-size: 3rem;
    }

    h3 {
      color: ${props => props.theme.colors.secondary};
      font-weight: 300;
      font-size: 2rem;
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

  @media screen and (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;