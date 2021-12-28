import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;

      lightBlue: string,
      lightBlueShadow: string,
      seaGreen: string,
      seaGreenDark: string,
      seaGreenExtraDark: string,
      seaGreenShadow: string,
      headerHamburgerBackground: string,
      orange: string,
      darkOrange: string,
      orangeShadow: string,
      white: string,
      black: string,
      disabledBtn: string,
      errorMessage:  string,
      toastError: string,
      toastShadow:  string,
      toastSuccess: string,
      loaderColor: string,
    }
  }
}