import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';
import { Box } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Lato } from 'next/font/google';
import './global.css';

const amalfiCoast = localFont({
  src: './fonts/amalfi-coast.woff2',
  display: 'swap',
});

const kingstonSignature = localFont({
  src: './fonts/kingston-signature.woff2',
  display: 'swap',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
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

const fontsClasses = [
  marcellus.className,
  kingstonSignature.className,
  lato.className,
  amalfiCoast.className,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="K & Z" />
      </head>
      <ThemeProviderWrapper>
        <Box
          component="body"
          className={`${fontsClasses.join(' ')} antialiased`}
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </Box>
      </ThemeProviderWrapper>
    </html>
  );
}
