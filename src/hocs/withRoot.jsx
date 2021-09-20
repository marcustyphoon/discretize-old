import React from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from 'theme-ui';

import baseTheme from '../styles/baseTheme';
import theme from '../styles/theme';

export default (Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ThemeProvider theme={baseTheme}>
            <Component {...this.props} />
          </ThemeProvider>
        </MuiThemeProvider>
      );
    }
  };
