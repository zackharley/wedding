import { Box } from '@mui/material';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import mobilePattern from '../img/mobile-pattern.svg';
import desktopPattern from '../img/desktop-pattern.svg';

export default function FloralWrapper({
  children,
}: Readonly<PropsWithChildren>) {
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
            src={desktopPattern}
            alt="Floral pattern graphic"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Image
            src={mobilePattern}
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
