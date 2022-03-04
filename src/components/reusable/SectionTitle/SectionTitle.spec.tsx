import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { SectionTitle } from "./index";

const projectsCard = {
  title: 'Conhecimentos',
  description: 'Conhecimentos adquiridos',
}

describe('ProjectsCard component', () => {
  it('Checking if title and description are displayed on screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <SectionTitle
          title={projectsCard.title}
          description={projectsCard.description}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('#Conhecimentos')).toBeInTheDocument();
    expect(screen.getByText('Conhecimentos adquiridos')).toBeInTheDocument();
  });
});