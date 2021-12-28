import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { useTheme } from './hooks/useTheme';

import { Profile } from './components/Profile';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

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
      <Sidebar toggleTheme={toggleTheme} isOpen={isOpen} toggle={toggle} />
      <Header toggleTheme={toggleTheme} toggle={toggle} />
      <Profile />
    </ThemeProvider>
  );
};