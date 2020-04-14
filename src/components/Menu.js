import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, Slide, useScrollTrigger } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

function Menu(props) {
    const theme = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <HideOnScroll {...props}>
                <AppBar style={{ alignItems: 'center', justifyContent: 'center', height: 100 }}>
                    <Toolbar>
                            <Typography variant="h3" color="inherit" display="inline">
                                <Box fontWeight="fontWeightMedium" display="inline">S</Box>
                                <Box fontWeight="fontWeightLight" display="inline">atsang</Box>
                            </Typography>
                            &nbsp;&nbsp;&nbsp;
                            <Typography variant="h3" color="inherit" display="inline">
                                <Box fontWeight="fontWeightMedium" display="inline">S</Box>
                                <Box fontWeight="fontWeightLight" display="inline">mruti</Box>
                            </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </ThemeProvider>
    );
}

export default Menu;