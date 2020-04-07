import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';


function Display() {
    const theme = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <Grid container direction="column" alignContent="center">
                {[1, 2, 3].map((value, index) => {
                    <Grid item key={index}>
                    
                    </Grid>
                })}
            </Grid>
        </ThemeProvider>
    );
}

export default Display;