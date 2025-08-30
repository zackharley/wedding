import { Box, Container, Typography } from '@mui/material';
import flowerDecoration from './img/flower-decoration.svg';
import Image from 'next/image';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import FloralWrapper from '@/components/FloralWrapper';
import Navbar from '@/components/Navbar';

export default function Home() {
  const weddingDate = new Date('2025-09-13');
  const daysUntilWedding = Math.ceil(
    (weddingDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  );
  return (
    <FloralWrapper justifyContent="center" showFooter={false}>
      <Container
        sx={{
          display: 'flex',
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexBasis: { xs: '100%', md: '50%' },
            maxWidth: { xs: '100%', md: '50%' },
          }}
        >
          <PhotoGallery />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Navbar />
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              height: '100%',
              maxHeight: '37.5rem',
              flexBasis: { xs: '100%', md: '50%' },
              pt: { xs: 4, md: 20 },
              pb: 4,
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
              sx={{ mb: 5 }}
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
              sx={{ mb: 5 }}
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
              STONE CROP ACRES / MORRISBURG ON
            </Typography>
            <Image src={flowerDecoration} alt="Flower decoration graphic" />
            <Typography
              color="primary.contrastText"
              fontSize="0.6875rem"
              lineHeight="0.6875rem"
              letterSpacing="0.06875rem"
              sx={{ mt: 4 }}
            >
              {daysUntilWedding} DAYS UNTIL WE SAY &quot;I DO&quot;
            </Typography>
          </Box>
        </Box>
      </Container>
    </FloralWrapper>
  );
}
