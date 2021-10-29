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

  body, input, textarea, select, button{
    font: 400 1rem 'Roboto', sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;