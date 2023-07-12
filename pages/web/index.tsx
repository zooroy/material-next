import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Button from '@mui/material/Button';
import Link from '@/src/Link';
import Label from '@/components/common/Label';

const Web = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        這裡是Web theme
        <br />
        我們字體, 主副顏色不一樣
      </Typography>
      {/* <Box
        sx={{
          width: '50px',
          height: '50px',
          bgcolor: theme.palette.primary.main,
        }}
      /> */}
      <Box sx={{ '& button,a': { ml: 2 } }}>
        <Button variant="contained">Primary</Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="secondary" variant="contained" component={Link} href="/">
          Go Home
        </Button>
      </Box>
      <Box mt={2}>
        <Label color="primary" sx={{ ml: 2 }}>
          Primary
        </Label>
        <Label color="secondary" sx={{ ml: 2 }}>
          Secondary
        </Label>
        <Label color="info" sx={{ ml: 2 }}>
          Info
        </Label>
        <Label color="success" sx={{ ml: 2 }}>
          Success
        </Label>
        <Label color="warning" sx={{ ml: 2 }}>
          Warning
        </Label>
        <Label color="error" sx={{ ml: 2 }}>
          Error
        </Label>
      </Box>
    </>
  );
};

export default Web;
