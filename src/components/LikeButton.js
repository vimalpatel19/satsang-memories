import React, { useState } from "react";
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

function LikeButton() {
    const [status, setStatus] = useState({like: false, color: "inherit"});

    const toggle = () => {
        if (status.like) {
            setStatus({like: false, color: "inherit"});
        }
        else {
            setStatus({like: true, color: "error"});
        }
    };

    return(
        <IconButton aria-label="add to favorites" onClick={toggle}>
            <FavoriteIcon color={status.color} />
        </IconButton>
    );
}

export default LikeButton;