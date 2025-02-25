import { Link } from '@mui/material';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        backgroundColor: 'primary.main',
        flexDirection: 'column',
        py: 1,
      }}
    >
      <Typography
        color="primary.contrastText"
        fontFamily="AmalfiCoast"
        fontSize="1rem"
        sx={{ mb: 1 }}
      >
        K&Z
      </Typography>
      <Link href="mailto:hello@harleyeverafter.com" target="_blank">
        <Typography
          color="primary.contrastText"
          fontSize="0.875rem"
          letterSpacing="0.2rem"
        >
          hello@harleyeverafter.com
        </Typography>
      </Link>
    </Box>
  );
}
