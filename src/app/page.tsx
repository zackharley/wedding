import { Box, Typography } from '@mui/material';
import flowerDecoration from './img/flower-decoration.svg';
import mobilePattern from './img/mobile-pattern.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <Box
      component="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh', position: 'relative' }}
    >
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
        <Image
          src={mobilePattern}
          alt="Floral pattern graphic"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ height: '100vh', maxHeight: '37.5rem', textAlign: 'center' }}
      >
        <Typography
          component="h1"
          fontSize="3rem"
          lineHeight="3rem"
          letterSpacing="0.2rem"
          color="primary.contrastText"
        >
          SAVE
          <br />
          <Typography
            component="span"
            fontFamily="kingstonSignature, serif"
            fontSize="2rem"
            lineHeight="2rem"
          >
            the
          </Typography>
          <br />
          DATE
        </Typography>
        <Box
          sx={{
            backgroundColor: 'primary.contrastText',
            flexGrow: 1,
            my: 4,
            width: '0.125rem',
          }}
        />
        <Typography
          color="primary.contrastText"
          fontSize="1.5rem"
          lineHeight="1.5rem"
          letterSpacing="0.15rem"
          sx={{ mb: 1 }}
        >
          KAITLYN & ZACK
        </Typography>
        <Typography
          color="primary.contrastText"
          fontSize="0.875rem"
          lineHeight="0.875rem"
          letterSpacing="0.0875rem"
          sx={{ mb: 4 }}
        >
          ARE GETTING MARRIED
        </Typography>
        <Typography
          color="primary.contrastText"
          fontSize="3rem"
          lineHeight="3rem"
          letterSpacing="0.3rem"
          sx={{ mb: 6.5 }}
        >
          09 13 25
        </Typography>
        <Typography
          color="primary.contrastText"
          fontSize="0.875rem"
          lineHeight="0.875rem"
          letterSpacing="0.0875rem"
          sx={{ mb: 4 }}
        >
          STONECROP ACRES / MORRISBURG ON
        </Typography>
        <Image src={flowerDecoration} alt="Flower decoration graphic" />
        <Typography
          color="primary.contrastText"
          fontSize="0.6875rem"
          lineHeight="0.6875rem"
          letterSpacing="0.06875rem"
          sx={{ mt: 4 }}
        >
          FORMAL INVITATION TO FOLLOW
        </Typography>
      </Box>
    </Box>
  );
}
