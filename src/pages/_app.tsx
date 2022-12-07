import { AppProps } from 'next/app';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from '../styles/global';
import { colors } from '../styles/themes/colors';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={colors as DefaultTheme}>
      <GlobalStyle />
      <ToastContainer />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp