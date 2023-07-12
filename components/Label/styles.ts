import { Box, BoxProps } from '@mui/material';
import { alpha, styled } from '@mui/system';
import {
  DEFAULT,
  ERROR,
  GREY,
  INFO,
  PRIMARY,
  SUCCESS,
  WARNING,
} from 'shared/constants/colors';

import { LabelProps } from '.';

const colorSettings = {
  default: {
    text: DEFAULT,
    background: alpha(GREY, 0.16),
  },
  primary: {
    text: '#007B55',
    background: alpha(PRIMARY, 0.16),
  },
  secondary: {
    text: '#1939B7',
    background: alpha('#3366FF', 0.16),
  },
  error: {
    text: '#B71D18',
    background: alpha(ERROR, 0.16),
  },
  warning: {
    text: '#B76E00',
    background: alpha(WARNING, 0.16),
  },
  info: {
    text: '#006C9C',
    background: alpha(INFO, 0.15),
  },
  success: {
    text: '#1B806A',
    background: alpha(SUCCESS, 0.15),
  },
};

export const StyledLabel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: Exclude<LabelProps['color'], undefined> } & BoxProps>(
  ({ color }) => ({
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '700',
    height: '24px',
    minWidth: '22px',
    borderRadius: '6px',
    cursor: 'default',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    padding: '0px 8px',
    color: colorSettings[color as Exclude<LabelProps['color'], undefined>].text,
    backgroundColor:
      colorSettings[color as Exclude<LabelProps['color'], undefined>]
        .background,
  })
);
