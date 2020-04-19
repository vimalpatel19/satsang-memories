import React, { useState, useEffect } from 'react';
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
    paddingTop: 105,
    paddingBottom: 25
  }
});

function App() {
  const classes = useStyles();

  const [pages, setPages] = useState(0);

  useEffect(() => {
    const updatePageCount = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_COUNT);

      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        const pages = Math.ceil(data.count / 10);
        setPages(pages);
      }
    }

    updatePageCount();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <div className={classes.root}>
        <Display pageCount={pages} />
      </div>
    </ThemeProvider>
  );
}

export default App;
