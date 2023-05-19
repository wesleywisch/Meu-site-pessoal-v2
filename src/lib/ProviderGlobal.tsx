'use client';

import { useState, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

import { GlobalStyle } from '../styles/global';
import { colors } from '../styles/themes/colors';

export default function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }


  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      {children}
    </ThemeProvider>
  );
}