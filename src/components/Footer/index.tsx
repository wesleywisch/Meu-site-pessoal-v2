import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiMicrosoftoutlook } from 'react-icons/si';

import { FooterContainer } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <FooterContainer>
      <div>
        <button onClick={handleScrollTop}>Voltar ao topo</button>

        <section>
          <a 
            href="mailto:wesley_wisch@hotmail.com"
            target='_blank'
            rel="noreferrer"
          >
            <SiMicrosoftoutlook
              onClick={() => handleRedirect('mailto:wesley_wisch@hotmail.com')}
            />
          </a>

          <a 
            href="https://github.com/wesleywisch"
            target='_blank'
            rel="noreferrer"
          >
            <AiOutlineGithub
              onClick={() => handleRedirect('https://github.com/wesleywisch')}
            />
          </a>

          <a 
            href="https://www.linkedin.com/in/wesley-wisch/"
            target='_blank'
            rel="noreferrer"
          >
            <AiFillLinkedin
              onClick={() => handleRedirect('https://www.linkedin.com/in/wesley-wisch/')}
            />
          </a>
        </section>
      </div>
    </FooterContainer>
  );
}