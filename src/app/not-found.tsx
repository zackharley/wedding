import FloralWrapper from '@/components/FloralWrapper';
import { Button, Container, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <FloralWrapper>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100dvh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography
          component="h1"
          variant="h2"
          sx={{ mt: 2 }}
          fontFamily="kingstonSignature, serif"
        >
          Page not found
        </Typography>
        <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
          Oops! This page wandered off during cocktail hour.
        </Typography>

        <Button href="/" color="darkOrange" variant="contained" sx={{ mt: 8 }}>
          Take me home
        </Button>
      </Container>
    </FloralWrapper>
  );
}
