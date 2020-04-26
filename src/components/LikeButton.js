import React, { useState } from "react";
import { IconButton, Badge } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

function LikeButton(props) {
    const [status, setStatus] = useState({like: false, color: "inherit", count: props.likes});

    const toggle = () => {
        if (status.like) {
            fetch(`${process.env.REACT_APP_BACKEND_UPDATE_LIKES}?id=${props.id}&count=-1`);
            setStatus({like: false, color: "inherit", count: status.count - 1});
        }
        else {
            fetch(`${process.env.REACT_APP_BACKEND_UPDATE_LIKES}?id=${props.id}&count=1`);
            setStatus({like: true, color: "error", count: status.count + 1});
        }
    };

    return(
        <React.Fragment>
            <IconButton aria-label="add to favorites" onClick={toggle}>
                <Badge color="primary" badgeContent={status.count}>
                    <FavoriteIcon color={status.color} />
                </Badge>
            </IconButton>
        </React.Fragment>
    );
}

export default LikeButton;