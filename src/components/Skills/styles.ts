import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 800px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;

  > div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 3rem;

    img{
      width: 30%;
      margin-left: 5rem;
    }
  }
`;

export const TechContainer = styled.div`
  width: 50%;
`;

export const Tech = styled.div`
  margin-bottom: 20px;
`;

export const NameTech = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .name{
    display: flex;
    align-items: center;

    .icon{
      margin-right: 0.5rem;
    }
  }
`;

export const Progress = styled.div`
  height: 8px;
  background: #b799f3;
  border-radius: 50px;
`;

export const BarraProgress = styled.div`
  height: 8px;
  background: #4a00e0;
  border-radius: 50px;
`;

export const Paragrafo = styled.p``;
