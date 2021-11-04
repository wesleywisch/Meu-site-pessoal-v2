import styled from 'styled-components';

export const Container = styled.header`
  height: 85px;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Title = styled.h1``;

export const HeaderContainer = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .switch{
    margin-left: 40px;
  }
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  margin: 0 6px;
  font-size: 1rem;
  padding: 5px 18px;
  border-radius: 60px;
  cursor: pointer;

  :hover{
    background-color: #18BC9C;
    transition: .4s;
  }
`;

export const Navegacao = styled.nav``;