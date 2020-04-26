import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Box } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

import LikeButton from './LikeButton';
import Mobile from './MobileShareButtons';
import Desktop from './DesktopShareButtons';

function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
}

function Post(props) {
    return(
        <Card>
            <CardActionArea onClick={() => window.open(props.post.url, "_blank")}>
                <CardMedia height="250" component="img" src={props.post.image} title={props.post.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.post.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {props.post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions disableSpacing>
                <LikeButton id={props.post.id} likes={props.post.likes} />
                { isMobile ? <Mobile link={props.post.url} title={props.post.title} /> : <Desktop link={props.post.url} title={props.post.title} description={props.post.description} /> }  
                <Typography variant="body1" style={{ marginLeft: 'auto', paddingRight: 10 }}>
                    <Box fontStyle="italic" fontWeight="fontWeightLight">
                        {formatDate(props.post.date)}
                    </Box>
                </Typography>
            </CardActions>
        </Card>
    );
}

export default Post;