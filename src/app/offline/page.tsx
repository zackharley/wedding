import FloralWrapper from '@/components/FloralWrapper';
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

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
        <Typography variant="h1">Offline</Typography>
        <Typography
          component="h1"
          variant="h2"
          sx={{ mt: 2 }}
          fontFamily="kingstonSignature, serif"
        >
          No internet connection
        </Typography>
        <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
          It seems you&apos;ve lost connection. Check your internet and try
          again.
        </Typography>

        <Link href="/" passHref>
          <Button color="darkOrange" variant="contained" sx={{ mt: 8 }}>
            Take me home
          </Button>
        </Link>
      </Container>
    </FloralWrapper>
  );
}
