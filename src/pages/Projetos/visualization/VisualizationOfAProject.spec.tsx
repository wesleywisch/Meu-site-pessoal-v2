import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import VisualizationOfAProject from "./[slug].page";

describe('Experience component', () => {
  it('Checking if the visualizationOfAProject page is rendering correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <VisualizationOfAProject />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  });
});