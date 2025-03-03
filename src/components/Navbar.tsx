'use client';

import { Fragment, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'FAQs', path: '/faqs' },
];

export default function Navbar() {
  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenNavMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}
    >
      {/* <Container maxWidth="xl"> */}
      <Toolbar disableGutters sx={{ justifyContent: 'end', pt: 1.5 }}>
        {/* Mobile menu icon - on the right */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Fullscreen Mobile menu */}
        <Drawer
          anchor="top"
          open={mobileMenuOpen}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
              height: '100%',
              backgroundColor: 'primary.contrastText',
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                py: 2,
                pl: 1.5,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'primary.main',
              }}
            >
              <Typography
                variant="h5"
                component={Link}
                href="/"
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: 'AmalfiCoast',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  color: 'primary.main',
                }}
              >
                K&Z
              </Typography>
              <IconButton
                size="large"
                aria-label="close menu"
                onClick={handleCloseNavMenu}
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <List
              sx={{
                pt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {pages.map((page) => (
                <Fragment key={page.name}>
                  {/* {index !== 0 && (
                    <Image src={navbarSeparator} alt="navbar separator" />
                  )} */}
                  <ListItem disablePadding sx={{ width: 'auto', mb: 3 }}>
                    <ListItemButton
                      component={Link}
                      href={page.path}
                      onClick={handleCloseNavMenu}
                      sx={{
                        textAlign: 'center',
                        borderBottom: isActive(page.path)
                          ? `2px solid ${theme.palette.primary.main}`
                          : 'none',
                        borderColor: 'primary.main',
                        borderRadius: 0,
                        px: 2,
                      }}
                    >
                      <ListItemText
                        primary={page.name}
                        slotProps={{
                          primary: {
                            color: 'primary.main',
                            fontSize: '1.5rem',
                            fontWeight: isActive(page.path) ? 'bold' : 'normal',
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          </Container>
        </Drawer>

        {/* Desktop menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'end',
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              href={page.path}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: 'primary.contrastText',
                display: 'flex',
                fontWeight: isActive(page.path) ? 'bold' : 'normal',
                borderBottom: isActive(page.path) ? '2px solid' : 'none',
                borderColor: 'primary.contrastText',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
