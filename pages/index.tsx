import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Button from '@mui/material/Button';
import Link from '@/src/Link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Button variant="contained" component={Link} noLinkStyle href="/web">
            WEB
          </Button>
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/admin"
          >
            ADMIN
          </Button>
        </Box>
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
