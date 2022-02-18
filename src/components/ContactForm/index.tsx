import { SectionTitle } from '../reusable/SectionTitle';

import { Form } from './Form';

import { ContactFormContainer } from './styles';

export function ContactForm() {
  return (
    <ContactFormContainer>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            preencha o formulário que
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </ContactFormContainer>
  );
}