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
          <SiMicrosoftoutlook
            onClick={() => handleRedirect('mailto:wesley_wisch@hotmail.com')}
          />

          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/wesleywisch')}
          />

          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/wesley-wisch/')}
          />
        </section>
      </div>
    </FooterContainer>
  );
}