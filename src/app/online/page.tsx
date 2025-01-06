import FloralWrapper from '@/components/FloralWrapper';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function OnlinePage() {
  return (
    <FloralWrapper>
      <Typography variant="h1">This page is only available online</Typography>
      <Link href="/" passHref>
        <Button>Go Home</Button>
      </Link>
    </FloralWrapper>
  );
}
