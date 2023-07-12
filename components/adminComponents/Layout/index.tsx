import { Box, Stack } from '@mui/material';
import React from 'react';
import Header from '@/components/adminComponents/Layout/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack sx={{ flexDirection: 'row', minHeight: '100vh' }}>
      <Box sx={{ width: '280px' }}>
        <Header />
      </Box>

      <Box sx={{ bgcolor: 'grey.200', flex: '1', minHeight: '100%' }}>
        {children}
      </Box>
    </Stack>
  );
};

export default Layout;
