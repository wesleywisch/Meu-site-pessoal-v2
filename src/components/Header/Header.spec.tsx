import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Header } from "./index";

describe('Component header', () => {
  it('Check if the names are in the html and are displayed on screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <Header toggle={() => false} />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    fireEvent.click(screen.getByText('Wesley Wisch'));
    expect(mockRouter.asPath).toEqual('/')

    expect(screen.getByText('Wesley Wisch')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
  });
});