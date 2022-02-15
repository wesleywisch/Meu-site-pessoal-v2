import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px){
    html{
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 87.5%; // 14px
    }
  }

  body {
    font: 400 1rem 'Roboto', sans-serif;
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button{
    cursor: pointer;
  }

  img{
    width: 100%;
    max-width: 100%;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  .container{
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;

    @media screen and (max-width: 1450px) {
      max-width: 70rem;
    }

    @media screen and (max-width: 1000px) {
      max-width: 50rem;
    }

    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }
  }
`;