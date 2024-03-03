import { createTheme } from '@mui/material/styles';

export const themeMui = createTheme({
  typography: {
    fontFamily: '"Archivo", sans-serif',
  },
  palette: {
    mainColor: '#FFFFFF',
    secondaryBlack: '#F5F5F5',
    mainBlack: '#060606',
    additionalDark: '#242424',
    accentColor: '#2190CF',
    accentColorLight: '#e0f4ff',
    mainGrey: '#676767',
    strokeGrey: '#D4D4D4',
    errorColor: '#EA0000',
  },
  transitions: {
    easing: {
      easeOut: '0.3s ease-out',
    },
  },
});