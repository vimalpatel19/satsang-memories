import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

import Post from './Post';

const DATA = [
    {
        "title": "Guruhari Darshan 3-5 Apr 2020, Ahmedabad, India",
        "description": "Darshan of His Holiness Mahant Swami Maharaj at Ahmedabad, India on 3-5 Apr 2020. Photographs can be viewed on the BAPS Swaminarayan Sanstha's website at: ht...",
        "image": "https://i.ytimg.com/vi/IxsGh4j47Oo/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=IxsGh4j47Oo",
        "date": "2019-04-07"
    },
    {
        "title": "Strings of Devotion",
        "description": "Brahmanand Swami was intent upon building a large three-shikhar mandir in Vartal. When Shri Hari’s efforts to stop him failed after sending…",
        "image": "https://miro.medium.com/max/1080/1*1OPt9KvwGGzWbQZN7PDnwg.png",
        "url": "https://medium.com/bapssatsang/strings-of-devotion-899debd35d09",
        "date": "2019-04-05"
    }
]

function Display() {
    const theme = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <Grid container direction="column" alignContent="center" spacing={1}>
                {DATA.map((value, index) => (
                    <Grid item key={index} xs={12} sm={10} md={7} lg={6}>
                        <Post post={value} />
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
}

export default Display;