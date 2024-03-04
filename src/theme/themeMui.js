import { createTheme } from '@mui/material/styles';

export const themeMui = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  palette: {
    background: {
      dark: '#5c2018',
      main: '#d4a59a',
      mediumLight: '#d4a59a',
      light: '#d4a59a',
      extraLight: '#f3e0dc',
      accent: '#4285f4'
    },
    text: {
      light: '#d4a59a',
      dark: '#5c2018',
    },
    greyPalette: {
      main: '#D4D4D4',
      light: '#030303',
      dark: '#676767'
    }
  },
  transitions: {
    easing: {
      easeOut: '0.3s ease-out',
    },
  },
});
