import { FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa';
import { SiMicrosoftoutlook } from 'react-icons/si';

import { TypicalComponent } from './ReactTypical';

import ProfileImage from '../../images/profilePhoto.jpg';

import Shape from '../../images/shape-bg.png';

import {
  ProfileContainer,
  ProfileParent,
  ProfileDetails,
  ProfileColz,
  ProfileColzIcon,
  SocialsLink,
  ProfileDetailsName,
  ProfileSpan,
  ProfileSpanHighlighted,
  ProfileDetailsRole,
  ProfileSpanPrimaryText,
  ProfilePainelH2,
  ProfileSpanRoleTagline,
  ProfileOptions,
  ProfileButton,
  ProfileButtonCurriculo,
  ProfilePicture,
  ProfilePictureBackground,
  BackgroundShape,
  BackgroundShapeImg,
} from './styles';

export function Profile() {
  return (
    <ProfileContainer id="about">
      <ProfileParent>
        <ProfileDetails>
          <ProfileColz>
            <ProfileColzIcon>
              <SocialsLink href="mailto:wesley_wisch@hotmail.com">
                <SiMicrosoftoutlook />
              </SocialsLink>

              <SocialsLink href="https://www.instagram.com/wesley_wisch/">
                <FaInstagram />
              </SocialsLink>

              <SocialsLink href="https://www.linkedin.com/in/wesley-wisch/">
                <FaLinkedin />
              </SocialsLink>

              <SocialsLink href="https://github.com/wesleywisch">
                <FaGithub />
              </SocialsLink>
            </ProfileColzIcon>
          </ProfileColz>

          <ProfileDetailsName>
            <ProfileSpan>
              Olá 👋, sou o
              <ProfileSpanHighlighted> Wesley Wisch</ProfileSpanHighlighted>
            </ProfileSpan>
          </ProfileDetailsName>

          <ProfileDetailsRole>
            <ProfileSpanPrimaryText>
              <ProfilePainelH2>
                <TypicalComponent
                  loop={Infinity}
                  steps={[
                    "Desenvolvedor Front-End",
                    2000,
                    "ReactJs",
                    2000,
                    "HTML/CSS",
                    2000,
                    "Javascript/Typescript",
                    2000,
                  ]}
                />
              </ProfilePainelH2>

              <ProfileSpanRoleTagline>
                Habilidade de criar aplicativos com operações front-end.
              </ProfileSpanRoleTagline>

            </ProfileSpanPrimaryText>
          </ProfileDetailsRole>

          <ProfileOptions>
            <ProfileButton className='primary-btn'>
              Contrate-me
            </ProfileButton>

            <ProfileButton className='highlighted-btn'>
              <ProfileButtonCurriculo href="curriculo/Curriculo.pdf" download="Curriculo.pdf">
                Currículo
              </ProfileButtonCurriculo>
            </ProfileButton>
          </ProfileOptions>

        </ProfileDetails>

        <ProfilePicture>
          <ProfilePictureBackground src={ProfileImage} />
        </ProfilePicture>

      </ProfileParent>

      <BackgroundShape>
        <BackgroundShapeImg src={Shape} />
      </BackgroundShape>
    </ProfileContainer>
  );
}