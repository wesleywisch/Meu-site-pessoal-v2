import styled from "styled-components";

type LatestProjectsCardPropsStyles = {
  imgUrl: string;
}

export const LatestProjectsCardContainer = styled.div<LatestProjectsCardPropsStyles>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }

      > div.overlay {
        opacity: 0.3;
      }
    }

    > button a {
      color: ${props => props.theme.colors.primary};
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay{
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.gradient};
      opacity: 0.75;
      transition: .5s;
    }

    > div.text{
      width: fit-content;
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: .5s;

      h3{
        color: ${props => props.theme.colors.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      p{
        color: ${props => props.theme.colors.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b
      }
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    
    a{
      color: ${props => props.theme.colors.white};
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: .8rem;
      transition: .5s;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 5rem 3rem 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div.text{
        left: -12rem;
      }
    }
  }

  @media screen and (max-width: 1450px){
    > section {
      width: 40rem;
    }
  }

  @media screen and (max-width: 1000px){
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    height: 17rem;
  }

  @media screen and (max-width: 450px){
    > section > div.text {
      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: .8rem;
      }
    }
  }
`;