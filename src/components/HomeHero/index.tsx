import Profile from '../../assets/profile.jpg';

import { HomeHeroContainer, TextContainer, InfosContainer, CodeItem } from './styles'

export function HomeHero() {
  return (
    <HomeHeroContainer data-aos="fade-up">
      <img src={Profile} alt="Foto de perfil" />

      <div>
        <TextContainer>
          <h3>Olá</h3>
          <h4>Me chamo Wesley Wisch</h4>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className='comment'>{'\u002F'}{'\u002F'}Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Wesley,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Wisch Lorenzeti.</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className='purple'>Cargo</span> {'\u007B'}
            <div>
              Função: <span className='blue'>Desenvolvedor Front-End Júnior,</span>
            </div>
            <div>
              Empresa: <span className='blue'>Buscando uma nova oportunidade.</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </HomeHeroContainer>
  );
}