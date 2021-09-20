import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Typography, Alert as MuiAlert } from '@mui/material';
import * as React from 'react';
import withLayout from '../hocs/withLayout';

// markup
const IndexPage = () => {
  return (
    <>
      <MuiAlert elevation={6} variant="filled" severity="warning">
        The gear optimizer is currently in beta! Templates are not final and phantasm and lifesteal
        damage is inaccurate. Please report potential issues to us in{' '}
        <Link href="https://discord.gg/Qdt7nFY" color="textPrimary">
          Discord
        </Link>{' '}
        or{' '}
        <Link
          href="https://github.com/discretize/discretize-gear-optimizer/tree/react-recode"
          color="textPrimary"
        >
          <GitHubIcon fontSize="small" /> Github
        </Link>
        .
      </MuiAlert>
      <Typography variant="h2" sx={{ paddingBottom: 2 }}>
        Gear Optimizer
      </Typography>
    </>
  );
};

export default withLayout({ disableContainer: false })(IndexPage);
