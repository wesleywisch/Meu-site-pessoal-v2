import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import Profile from '../../assets/profile.jpg';

import { HomeHero } from "./index";

describe('HomeHero component', () => {
  it('Checking if the image appears on screen, and their respective names', () => {
    const { getByAltText } = render(
      <ThemeProvider theme={colors}>
        <HomeHero />
      </ThemeProvider>
    );

    expect(getByAltText('Foto de perfil')).toHaveAttribute('src', `${Profile}`);
    expect(getByAltText('Foto de perfil')).toBeInTheDocument();

    expect(screen.getByText('Olá')).toBeInTheDocument();
    expect(screen.getByText('Me chamo Wesley Wisch')).toBeInTheDocument();
  });

  it('Checking if all names appear on Card1 screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <HomeHero />
      </ThemeProvider>
    );

    expect(screen.getByText('//Minha apresentação')).toBeInTheDocument();
    expect(screen.getByText('Infos')).toBeInTheDocument();
    expect(screen.getByText('Nome:')).toBeInTheDocument();
    expect(screen.getByText('Wesley,')).toBeInTheDocument();
    expect(screen.getByText('Sobrenome:')).toBeInTheDocument();
    expect(screen.getByText('Wisch Lorenzeti.')).toBeInTheDocument();
  })

  it('Checking if all names appear on Card2 screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <HomeHero />
      </ThemeProvider>
    );

    expect(screen.getByText('Cargo')).toBeInTheDocument();
    expect(screen.getByText('Função:')).toBeInTheDocument();
    expect(screen.getByText('Desenvolvedor Front-End Júnior,')).toBeInTheDocument();
    expect(screen.getByText('Empresa:')).toBeInTheDocument();
    expect(screen.getByText('Buscando a minha primeira oportunidade.')).toBeInTheDocument();
  })
})