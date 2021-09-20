import { Container, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import 'typeface-fira-mono';
import 'typeface-menomonia';
import 'typeface-muli';
import 'typeface-raleway';
import withRoot from '../../hocs/withRoot';

const Layout = ({ children, ContainerProps, disableContainer = false }) => {
  // state = { open: false };
  return (
    <>
      {(!disableContainer && (
        <Container maxWidth="lg" {...ContainerProps}>
          <Paper elevation={8} sx={{ padding: 2, backgroundColor: 'background.default' }}>
            {children}
          </Paper>
        </Container>
      )) ||
        children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// removed globals here
export default withRoot(Layout);
