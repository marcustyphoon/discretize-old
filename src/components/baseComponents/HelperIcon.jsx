import { withStyles } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';
import { Tooltip } from 'gw2-ui-bulk';
import React from 'react';

const styles = (theme) => ({
  icon: {
    color: theme.palette.primary.dark,
  },
});

const HelperIcon = ({ classes, text, size }) => {
  return (
    <Tooltip content={text}>
      <span>
        <HelpOutline className={classes.icon} fontSize={size} />
      </span>
    </Tooltip>
  );
};
export default withStyles(styles)(HelperIcon);
