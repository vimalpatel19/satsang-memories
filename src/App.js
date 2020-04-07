import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Menu from './components/Menu';
import Display from './components/Display';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a2327',
    },
    secondary: {
      main: '#bfcbd0',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Display />
    </ThemeProvider>
  );
}

export default App;
