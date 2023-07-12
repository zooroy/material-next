import { Box, Stack } from '@mui/material';
import React from 'react';
import Header from '@/components/webComponents/Layout/Header';
import Footer from '@/components/webComponents/Layout/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'grey.200', height: '300px', minHeight: '100%' }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
