import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

function Menu() {
    const theme = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <AppBar style={{ alignItems: 'center' }}>
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Satsang Memories
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default Menu;