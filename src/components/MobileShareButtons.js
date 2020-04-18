import React, { Fragment } from "react";
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TelegramShareButton, TelegramIcon } from 'react-share';


function MobileShareButtons(props) {

    return(
        <Fragment>
            &nbsp;&nbsp;
            <WhatsappShareButton url={props.link} title={props.title}>
                <WhatsappIcon round={true} size={27} />
            </WhatsappShareButton>
            &nbsp;&nbsp;
            <FacebookShareButton url={props.link}>
                <FacebookIcon round={true} size={27} />
            </FacebookShareButton>
            &nbsp;&nbsp;
            <TelegramShareButton url={props.link} title={props.title}>
                <TelegramIcon round={true} size={27} />
            </TelegramShareButton>      
        </Fragment>
    );
}

export default MobileShareButtons;