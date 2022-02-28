import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 2rem;
  }

  p {
    color: gray;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  button {
    background: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    padding: .5rem 1rem;
    border-radius: .8rem;

    a {
      font-size: 1rem;
      color: #fff;
    }
  }
`;