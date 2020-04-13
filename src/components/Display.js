import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Post from './Post';
import Fetch from '../hooks/Fetch';

function Display() {
    const theme = useTheme();
    const data = Fetch(process.env.REACT_APP_BACKEND);

    return(
        <ThemeProvider theme={theme}>
            {
                data.length === 0
                ?
                (   
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress size={100} thickness={2} />
                    </div>
                )
                :
                (
                    <Grid container direction="column" alignContent="center" spacing={1}>
                        { data.map((value, index) => (
                        <Grid item key={index} xs={12} sm={10} md={7} lg={6}>
                            <Post post={value} />
                        </Grid>
                        ))}
                    </Grid>
                )
            }
        </ThemeProvider>
    );
}

export default Display;