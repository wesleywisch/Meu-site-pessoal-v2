import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

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
          title='React'
          icon={<FaReact />}
          colorIcon='#61DAFB'
        />
      </section>
    </KnowledgeContainer>
  );
}