'use client';

import { Box, GlobalStyles } from '@mui/material';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import mobilePatternDark from '../img/mobile-pattern-dark.svg';
import mobilePatternLight from '../img/mobile-pattern-light.svg';
import desktopPatternDark from '../img/desktop-pattern-dark.svg';
import desktopPatternLight from '../img/desktop-pattern-light.svg';

type FloralWrapperProps = Readonly<
  PropsWithChildren<{
    variant?: 'dark' | 'light';
  }>
>;

export default function FloralWrapper({
  children,
  variant = 'dark',
}: FloralWrapperProps) {
  return (
    <Box
      component="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100dvh',
        position: 'relative',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor:
              variant === 'light' ? '#FBF8F7' : theme.palette.primary.main,
            margin: 0,
          },
        })}
      />
      {/* <PushNotificationManager />
      <InstallPrompt /> */}
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
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Image
            src={variant === 'light' ? desktopPatternLight : desktopPatternDark}
            alt="Floral pattern graphic"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Image
            src={variant === 'light' ? mobilePatternLight : mobilePatternDark}
            alt="Floral pattern graphic"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Box>
      {children}
    </Box>
  );
}
