import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const HeaderContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navegacao = styled.nav`
  ul{
    display: flex;

     li{
      margin: 0 17.5px;

      :hover{
        background-color: green;
      }
    }
  }
`;