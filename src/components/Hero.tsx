import Image from 'next/image';
import { Box, Typography, Container } from '@mui/material';
import HeroImage from '../img/hero-img.webp';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({
  title = 'Welcome',
  subtitle = 'Your special day awaits',
}: HeroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: {
          xs: '300px', // mobile height
          md: '400px', // desktop height
        },
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Image
          src={HeroImage}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'primary.main',
            opacity: 0.7,
          }}
        />
      </Box>

      {/* Content overlay */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: {
            xs: 'center', // Center on mobile
            md: 'flex-start', // Left aligned on desktop
          },
          textAlign: {
            xs: 'center', // Center on mobile
            md: 'left', // Left aligned on desktop
          },
          color: 'white',
          pt: 4,
          pb: 4,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          color="primary.contrastText"
          sx={{
            fontFamily: 'kingstonSignature, serif',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="primary.contrastText"
          sx={{
            fontSize: '3rem',
            letterSpacing: '0.2em',
            maxWidth: '600px',
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
