import React, { useState, Fragment } from "react";
import { IconButton, Snackbar } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from "copy-to-clipboard";

function CopyButton(props) {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(true);
        copy(props.link);
    };

    const handleClose = () => {
        setState(false);
    };

    return(
        <Fragment>
            <IconButton aria-label="copy">
                <FileCopyIcon onClick={handleClick} />
            </IconButton>
    
            <Snackbar message="Successfully copied link to clipboard!" open={state} autoHideDuration={2500} onClose={handleClose} />
        </Fragment> 
    );
}

export default CopyButton;