'use client';

import { ThemeProvider, createTheme } from '@mui/material';
import type { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    darkGreen?: Palette['primary'];
    lightGreen?: Palette['primary'];
    beige?: Palette['primary'];
    lightOrange?: Palette['primary'];
    darkOrange?: Palette['primary'];
  }
  interface PaletteOptions {
    darkGreen?: PaletteOptions['primary'];
    lightGreen?: PaletteOptions['primary'];
    beige?: PaletteOptions['primary'];
    lightOrange?: PaletteOptions['primary'];
    darkOrange?: PaletteOptions['primary'];
  }
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    darkGreen: true;
    lightGreen: true;
    beige: true;
    lightOrange: true;
    darkOrange: true;
  }
}

const darkGreen = {
  main: '#13322C',
  contrastText: '#F5EAE1',
};

const lightGreen = {
  main: '#6A715F',
  contrastText: '#F5EAE1',
};

export const theme = createTheme({
  // #13322C, #6A715F, #EAD5C2, #B47157, and #814438
  palette: {
    primary: darkGreen,
    secondary: lightGreen,

    darkGreen,
    lightGreen,
    beige: {
      main: '#EAD5C2',
      contrastText: '#13322C',
    },
    lightOrange: {
      main: '#B47157',
      contrastText: '#13322C',
    },
    darkOrange: {
      main: '#814438',
      contrastText: '#F5EAE1',
    },
  },
  typography: {
    allVariants: {
      color: '#13322C',
    },
    fontFamily: 'marcellus, sans-serif',
  },
});

export default function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
