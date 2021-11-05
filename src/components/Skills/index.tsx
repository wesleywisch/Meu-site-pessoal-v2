import React from 'react';
import { Title } from '../Title';

import { Container, TechContainer, Tech, Progress, BarraProgress, NameTech, Paragrafo } from './styles';

import Skill from '../../images/skills.png';

import { Techs } from '../../json/Techs';

export function Skills() {
  return (
    <Container id="skills">
      <Title
        title="Skills"
        color="#333"
        fontSize={3}
        size="rem"
        BorderColor="#333"
        BorderSize={15}
      />

      <div>
        <TechContainer>
          {Techs.map((tech, key) => {
            const { icon: Icon } = tech;

            return (
              <Tech key={key}>
                <NameTech>
                  <Paragrafo className="name">
                    <Icon
                      size={24}
                      className="icon"
                      color={tech.color}
                    />
                    {tech.techName}
                  </Paragrafo>
                  <Paragrafo>{tech.TechPercentage}%</Paragrafo>
                </NameTech>
                <Progress>
                  <BarraProgress style={{ width: `${tech.TechPercentage}%` }}></BarraProgress>
                </Progress>
              </Tech>
            )
          })}
        </TechContainer>

        <img src={Skill} alt="" />
      </div>
    </Container>
  );
}