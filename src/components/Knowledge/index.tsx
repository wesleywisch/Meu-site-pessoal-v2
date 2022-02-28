import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { DiGit } from 'react-icons/di';

import { KnowledgeCard } from '../reusable/KnowledgeCard';
import { SectionTitle } from '../reusable/SectionTitle';

import { KnowledgeContainer } from './styles';

export function Knowledge() {
  return (
    <KnowledgeContainer>
      <SectionTitle
        title='Conhecimentos'
      />

      <section>
        <KnowledgeCard
          title='HTML'
          icon={<AiFillHtml5 />}
          colorIcon='#CF361D'
        />

        <KnowledgeCard
          title='CSS'
          icon={<FaCss3Alt />}
          colorIcon='#0181BE'
        />

        <KnowledgeCard
          title='Javascript'
          icon={<IoLogoJavascript />}
          colorIcon='#F7DF1E'
        />

        <KnowledgeCard
          title='Typescript'
          icon={<SiTypescript />}
          colorIcon='#0074C2'
        />

        <KnowledgeCard
          title='React'
          icon={<FaReact />}
          colorIcon='#61DAFB'
        />

        <KnowledgeCard
          title='React Native'
          icon={<FaReact />}
          colorIcon='#61DAFB'
        />

        <KnowledgeCard
          title='Next'
          icon={<SiNextdotjs />}
          colorIcon='##191919'
        />

        <KnowledgeCard
          title='NodeJs'
          icon={<FaNodeJs />}
          colorIcon='#89BB3C'
        />

        <KnowledgeCard
          title='Git'
          icon={<DiGit />}
          colorIcon='#E44C30'
        />

        <KnowledgeCard
          title='Github'
          icon={<AiFillGithub />}
          colorIcon='#AFB5BB'
        />
      </section>
    </KnowledgeContainer>
  );
}