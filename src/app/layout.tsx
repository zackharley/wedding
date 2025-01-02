import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThemeProviderWrapper from './ThemeProviderWrapper';
import { Box } from '@mui/material';
import './global.css';

const kingstonSignature = localFont({
  src: './fonts/kingston-signature.woff2',
  display: 'swap',
});

const marcellus = localFont({
  src: './fonts/marcellus-sc.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kaitlyn & Zackery Are Getting Married | Harley Ever After',
  description: 'We',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProviderWrapper>
        <Box
          component="body"
          className={`${marcellus.className} ${kingstonSignature.className} antialiased`}
          sx={{ backgroundColor: 'primary.main' }}
        >
          {children}
        </Box>
      </ThemeProviderWrapper>
    </html>
  );
}
