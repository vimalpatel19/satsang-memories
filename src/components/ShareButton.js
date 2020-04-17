import React from "react";
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';


function ShareButton() {
    return(
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
    );
}

export default ShareButton;