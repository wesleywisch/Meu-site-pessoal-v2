import { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';

import { colors } from './styles/themes/colors';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { NotFound } from './components/NotFound';

import { Home } from './pages/Home';
import { Projetos } from './pages/Projetos';
import { VisualizationOfAProject } from './pages/VisualizationOfAProject';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <ToastContainer />
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/projetos/:slugParams' element={<VisualizationOfAProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};