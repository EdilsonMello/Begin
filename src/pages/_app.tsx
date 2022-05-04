// Dependencies
import React from 'react'
import { AppProps } from 'next/app';

// Style
// import { Container } from './styles';
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Navbar from '../components/navbar/navbar.component';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Navbar/>
    </ThemeProvider>
  );
}

export default MyApp;

