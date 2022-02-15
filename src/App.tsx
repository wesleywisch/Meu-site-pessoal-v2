import { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { useTheme } from './hooks/useTheme';

import { Header } from './components/Header';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light);
  const [isOpen, setIsOpen] = useState(false);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} toggle={toggle} />
    </ThemeProvider>
  );
};