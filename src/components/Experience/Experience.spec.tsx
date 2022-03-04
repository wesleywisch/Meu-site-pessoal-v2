import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Experience } from "./index";

describe('Experience component', () => {
  it('Check if the section title is showing and also the course names.', () => {
    render(
      <ThemeProvider theme={colors}>
        <Experience />
      </ThemeProvider>
    );

    expect(screen.getByText('#1 ano')).toBeInTheDocument();
    expect(screen.getByText('de cursos extracurriculares')).toBeInTheDocument();

    expect(screen.getByText('Certificado do curso de HTML | CSS | Java Script')).toBeInTheDocument();
    expect(screen.getByText('Certificado do curso de Firebase | jQuery | Bootstrap')).toBeInTheDocument();
    expect(screen.getByText('Certificado do curso de NodeJs | MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Certificado do curso da Trilha ReactJs')).toBeInTheDocument();
  });
});