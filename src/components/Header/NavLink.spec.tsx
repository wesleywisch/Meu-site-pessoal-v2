import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { NavLink } from "./NavLink";

describe('NavLink component', () => {
  it('Checking if the names are on screen and if they have their respective attributes', () => {
    render(
      <ThemeProvider theme={colors}>
        <MemoryRouter initialEntries={['/', '/projetos']}>
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/projetos" />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Projetos').closest('a')).toHaveAttribute('href', '/projetos');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
  });

  it('Checking if when the link is active it changes the class', () => {
    render(
      <ThemeProvider theme={colors}>
        <MemoryRouter initialEntries={['/', '/projetos']}>
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/projetos" includes />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Home').closest('li')).toHaveClass('feKcvd');

    expect(screen.getByText('Projetos').closest('li')).toHaveClass('kIGwpi');

    fireEvent.click(screen.getByText('Home'));
    
    expect(screen.getByText('Home').closest('li')).toHaveClass('kIGwpi');

    fireEvent.click(screen.getByText('Projetos'));

    expect(screen.getByText('Projetos').closest('li')).toHaveClass('kIGwpi');
  })
});