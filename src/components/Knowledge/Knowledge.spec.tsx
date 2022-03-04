import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Knowledge } from "./index";

describe('Knowledge component', () => {
  it('Check if the section title appears', () => {
    render(
      <ThemeProvider theme={colors}>
        <Knowledge />
      </ThemeProvider>
    );

    expect(screen.getByText('#Conhecimentos')).toBeInTheDocument();
  });

  it('Check if the technology names appear on screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <Knowledge />
      </ThemeProvider>
    );

    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('Javascript')).toBeInTheDocument();
    expect(screen.getByText('Typescript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('React Native')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('NodeJs')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
  });
});