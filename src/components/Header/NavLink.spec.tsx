import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { NavLink } from "./NavLink";

describe('NavLink component', () => {
  it('Checking if the names are on screen and if they have their respective attributes', () => {
    render(
      <ThemeProvider theme={colors}>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    fireEvent.click(screen.getByText('Home'));
    expect(mockRouter.asPath).toEqual('/')

    fireEvent.click(screen.getByText('Projetos'));
    expect(mockRouter.asPath).toEqual('/projetos')


    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
  });

  it('Checking if when the link is active it changes the class', () => {
    render(
      <ThemeProvider theme={colors}>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    const link = screen.getByTestId('linkHome');
    const project = screen.getByTestId('linkProject');

    expect(link).toHaveClass('sc-eDvSVe JVAjX')
    expect(project).toHaveClass('sc-eDvSVe hzdFiM')

    fireEvent.click(screen.getByText('Home'));
    expect(link).toHaveClass('sc-eDvSVe hzdFiM')

    fireEvent.click(screen.getByText('Projetos'));
    expect(project).toHaveClass('sc-eDvSVe hzdFiM')
  })
});