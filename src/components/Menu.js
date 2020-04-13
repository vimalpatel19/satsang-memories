import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

function Menu() {
    const theme = useTheme();

    return(
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default Menu;