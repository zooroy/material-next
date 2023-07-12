import React from 'react';
import { Box } from '@mui/system';

import { StyledLabel } from './styles';

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof Box> {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success';
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({
  children,
  color = 'default',
  ...props
}) => {
  return (
    <StyledLabel color={color} {...props}>
      {children}
    </StyledLabel>
  );
};

export default Label;
