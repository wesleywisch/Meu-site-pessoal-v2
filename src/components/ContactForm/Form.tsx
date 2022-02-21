import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <Input type='text' placeholder='Nome' required />
      <Input type='email' placeholder='E-mail' required />
      <TextArea placeholder='Mensagem' required />
      <button type='submit'>Enviar</button>
    </FormContainer>
  );
}