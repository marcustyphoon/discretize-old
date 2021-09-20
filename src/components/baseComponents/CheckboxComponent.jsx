import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

const CheckboxComponent = ({ checked, value, label, onChange, ...rest }) => (
  <FormControlLabel
    control={
      <Checkbox color="primary" checked={checked} onChange={onChange} value={value} {...rest} />
    }
    label={label}
  />
);
export default CheckboxComponent;
