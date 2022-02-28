import styled from "styled-components";

export const HomeHeroContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  > img {
    width: 25rem;
    border-radius: 50%;
    border: solid .2rem #0D1117;
    flex: 1;
  }

  > div {
    flex: 4;
    margin-left: 5rem;
  }

  @media screen and (max-width: 1450px) {
    > div {
      flex: 1;
    }

    img {
      flex: 0.5;
    }
  }

  @media screen and (max-width: 1000px) {
    > div {
      margin-left: 0;
    }
    
    > img {
      width: 22rem;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;

    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  h3{
    font-size: 6rem;
    color: ${props => props.theme.colors.primary};
  }

  h4{
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.secondary};
  }

  @media screen and (max-width: 1450px) {
    h3{
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    h3{
      font-size: 3rem;
    }

    h4{
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const InfosContainer = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1450px) {
    width: 100%;
  }
`;

export const CodeItem = styled.div`
  background: ${props => props.theme.colors.gradient};
  padding: 2rem;
  font-family: monospace;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
  width: 32rem;
  align-self: flex-start;
  transition: 1s !important;
  font-size: 1.2rem;

  &:hover{
    filter: brightness(1.2);
  }

  &:last-child{
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple{
    color: #c38cdd;
  }

  span.blue{
    color: #7ac7e3;
  }

  span.comment{
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
    display: block;
  }

  @media screen and (max-width: 1450px) {
    width: 24rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 540px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 360px) {
    font-size: .7rem;
  }
`;