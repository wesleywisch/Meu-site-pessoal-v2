import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: green;
  padding-top: 85px;
  display: flex;
  justify-content: center;
`;

export const SectionRepository = styled.section`
  max-width: 1160px;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  background: #181818;
  border-radius: .8rem;
  padding: 2rem 2rem;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    margin: 2rem 0;
    color: #c5c5c5;
  }

  @media screen and (max-width: 1200px) {
    margin: 2rem 30px;
  }
`;

export const Card = styled.div`
  position: relative;
  min-height: 180px;
  height: 100%;
  background: #292929;
  border-radius: 5px;
  padding: 1rem 2rem;
`;

export const RepositoryTitle = styled.strong`
  color: #fff;
`;

export const RepositoryDescription = styled.p`
  font-size: 13px;
  color: #ddd;
  margin-top: 8px;
  margin-bottom: 50px;
`;

export const RepositoryLink = styled.a`
  position: absolute;
  bottom: 20px;
  display: inline-block;
  margin-top: 16px;
  text-decoration: none;
  color: #8257e6;
  cursor: pointer;
  font-size: 0.9rem;

  :hover{
    span{
      display: flex;
    }
  }

  span{
      display: none;
      height: 1px;
      background-color: #8257e6;
      animation: teste .4s ease-in;

      @keyframes teste {
      to {
        width: 100%;
      }
      from {
        width: 0%;
      }
    }
  }
`;

export const List = styled.aside`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 350px) {
    h3{
      font-size: 1rem;
    }
  }
`;