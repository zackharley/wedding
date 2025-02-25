'use client';

import { Box, GlobalStyles } from '@mui/material';
import type { PropsWithChildren } from 'react';
import type { CSSProperties } from 'react';
import mobilePatternDark from '../img/mobile-pattern-dark.svg';
import mobilePatternLight from '../img/mobile-pattern-light.svg';
import desktopPatternDark from '../img/desktop-pattern-dark.svg';
import desktopPatternLight from '../img/desktop-pattern-light.svg';
import Hero from './Hero';
import Footer from './Footer';

type FloralWrapperProps = Readonly<
  PropsWithChildren<{
    justifyContent?: CSSProperties['alignItems'];
    showFooter?: boolean;
    subtitle?: string;
    title?: string;
    variant?: 'dark' | 'light';
  }>
>;

export default function FloralWrapper({
  children,
  justifyContent = 'start',
  showFooter = true,
  subtitle,
  title,
  variant = 'dark',
}: FloralWrapperProps) {
  return (
    <>
      {/* <PushNotificationManager />
      <InstallPrompt /> */}
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent={justifyContent}
        sx={{
          minHeight: '100dvh',
          position: 'relative',
        }}
      >
        {title && <Hero title={title} subtitle={subtitle} />}
        <Box
          sx={{
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -1,
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              height: '100%',
              width: '100%',
              backgroundImage: `url(${variant === 'light' ? desktopPatternLight.src : desktopPatternDark.src})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
            }}
            aria-hidden="true"
          />
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              height: '100%',
              width: '100%',
              backgroundImage: `url(${variant === 'light' ? mobilePatternLight.src : mobilePatternDark.src})`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
            }}
            aria-hidden="true"
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
        {showFooter && <Footer />}
      </Box>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor:
              variant === 'light' ? '#FBF8F7' : theme.palette.primary.main,
            margin: 0,
          },
        })}
      />
    </>
  );
}
