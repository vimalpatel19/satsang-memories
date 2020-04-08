import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function Post(props) {
    return(
        <Card>
            <CardActionArea>
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;