import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { BannerProject } from "./index";

const banner = {
  title: 'Teste',
  type: 'website',
  imgUrl: 'imagemAleatoria.png',
  arrowLeft: 'arrow',
};

jest.mock('next/router', () => {
  return {
    useRouter() {
      return '/projetos';
    }
  }
});

describe('BannerProject component', () => {
  it('Checking component is rendering correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <BannerProject
          imgUrl={banner.imgUrl}
          title={banner.title}
          type={banner.type}
          arrowLeft={banner.arrowLeft}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(screen.getByText('website')).toBeInTheDocument();
    expect(screen.getByText('arrow')).toBeInTheDocument();
  });
})