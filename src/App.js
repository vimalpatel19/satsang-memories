import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 75,
    paddingBottom: 25
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div className={classes.root}>
        <Display />
      </div>
    </ThemeProvider>
  );
}

export default App;
