import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { ExperienceCard } from "./index";

const experience = {
  title: '1 ano',
  description: 'teste de descrição',
  year: 2022,
  titleButton: 'Ver credencial',
  linkButton: 'https://github.com/wesleywisch'
}

describe('ExperienceCard component', () => {
  it('Checking that items are displayed on screen and that the button leads to the correct url', () => {
    render(
      <ThemeProvider theme={colors}>
        <ExperienceCard
          title={experience.title}
          year={experience.year}
          description={experience.description}
          titleButton={experience.titleButton}
          linkButton={experience.linkButton}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('1 ano')).toBeInTheDocument();
    expect(screen.getByText('teste de descrição')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getByText('Ver credencial')).toBeInTheDocument();
    expect(screen.getByText('Ver credencial')).toHaveAttribute('href', 'https://github.com/wesleywisch');
  });
});