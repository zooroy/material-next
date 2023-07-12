import { Public_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const publicSans = Public_Sans({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'sans-serif'],
});

// Create a theme instance.
const adminTheme = createTheme({
  palette: {
    primary: {
      main: '#00AB55',
    },
    secondary: {
      main: '#3366FF',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: publicSans.style.fontFamily,
  },
});

export default adminTheme;
