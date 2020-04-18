import React, { useState, Fragment } from "react";
import { IconButton, Snackbar } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EmailIcon from '@material-ui/icons/Email';
import copy from "copy-to-clipboard";
import { EmailShareButton } from 'react-share';

function DesktopShareButtons(props) {
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
            &nbsp;&nbsp;
            <EmailShareButton url={props.link} subject={props.title} body={props.description}>
                <EmailIcon color="action" />
            </EmailShareButton>

            <IconButton aria-label="copy" onClick={handleClick}>
                <FileCopyIcon />
            </IconButton>
            <Snackbar message="Successfully copied link to clipboard!" open={state} autoHideDuration={2500} onClose={handleClose} />
        </Fragment> 
    );
}

export default DesktopShareButtons;