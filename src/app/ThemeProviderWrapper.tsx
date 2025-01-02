'use client';

import { ThemeProvider, createTheme } from '@mui/material';
import type { ReactNode } from 'react';

export const theme = createTheme({
  // #13322C, #6A715F, #EAD5C2, #B47157, and #814438
  palette: {
    primary: {
      main: '#13322C',
      contrastText: '#F5EAE1',
    },
    secondary: {
      main: '#6A715F',
      contrastText: '#F5EAE1',
    },
  },
  typography: {
    fontFamily: 'Marcellus SC, serif',
  },
});

export default function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
