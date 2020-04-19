import React, { Fragment, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import { isMobile } from 'react-device-detect';

import Post from './Post';

function Display(props) {
    const theme = useTheme();
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}?size=10&skip=0`);

            if (response.status >= 200 && response.status <= 299) {
                const data = await response.json();
                setData(data);
            }
            else {
                setData([]);
            }
        }
        getData();
    }, []);

    const updatePage = async (event, value) => {
        setData(null);
        const skip = (value - 1) * 10;
        const response = await fetch(`${process.env.REACT_APP_BACKEND}?size=10&skip=${skip}`);

        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json();
            setData(data);
            setPageNum(value);
        }
        else {
            setData([]);
        }
    }

    return(
        <ThemeProvider theme={theme}>
            {
                data === null
                ?
                (   
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress size={100} thickness={2} />
                    </div>
                )
                :
                (
                    <Fragment>
                        <Grid container direction="column" alignContent="center" spacing={1}>
                            { data.map((value, index) => (
                            <Grid item key={index} xs={12} sm={10} md={7} lg={6}>
                                <Post post={value} />
                            </Grid>
                            ))}
                        </Grid>

                        <div style={{display: 'flex',  justifyContent:'center', paddingTop: 30 }}>
                            {
                                isMobile
                                ?
                                (<Pagination count={props.pageCount} size="small" color="primary" page={pageNum} onChange={updatePage} />)
                                :
                                (<Pagination count={props.pageCount} size="large" color="primary" page={pageNum} onChange={updatePage} />)
                            }
                        </div>
                    </Fragment>
                )
            }
        </ThemeProvider>
    );
}

export default Display;