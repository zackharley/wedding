import { Box, Container, Typography } from '@mui/material';
import flowerDecoration from './img/flower-decoration.svg';
import Image from 'next/image';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import FloralWrapper from '@/components/FloralWrapper';

export default function Home() {
  return (
    <FloralWrapper justifyContent="center" showFooter={false}>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexBasis: { xs: '100%', md: '50%' },
            maxWidth: { xs: '100%', md: '50%' },
          }}
        >
          <PhotoGallery />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            height: '100%',
            maxHeight: '37.5rem',
            flexBasis: { xs: '100%', md: '50%' },
            py: 4,
            px: 3,
            alignItems: { xs: 'center', md: 'end' },
            textAlign: { xs: 'center', md: 'right' },
          }}
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
              color="primary.contrastText"
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
            KAITLYN & ZACKERY
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
            09∙13∙25
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
      </Container>
    </FloralWrapper>
  );
}
