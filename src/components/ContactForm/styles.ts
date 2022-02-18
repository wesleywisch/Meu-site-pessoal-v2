import styled from "styled-components";

export const ContactFormContainer = styled.section``;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: .5rem;
    background: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    transition: .5s;
    width: fit-content;

    &:disabled {
      opacity: 0.3;
    }

    &:not(:disabled):hover {
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 450px) {
    > button {
      padding: .8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1.7rem 1.5rem;
  color: ${props => props.theme.colors.primary};
  border-radius: .5rem;
  font-size: 1.2rem;
  outline: none;
  transition: .5s;

  &:focus{
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder{
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1.7rem 1.5rem;
  color: ${props => props.theme.colors.primary};
  border-radius: .5rem;
  font-size: 1.2rem;
  outline: none;
  resize: none;
  transition: .5s;

  grid-column: 1 / 3;

  &:focus{
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder{
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 700px) {
    grid-column: 1;
  }

  @media screen and (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;