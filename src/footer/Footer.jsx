import React from "react";
import s from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

import gMail from "../assets/image/contactIcons/mailIcon.svg";
import gitHub from "../assets/image/contactIcons/gitIcon.svg";
import FB from "../assets/image/contactIcons/facebook.svg";
import linkedIn from "../assets/image/contactIcons/linkedin.svg";


function Footer() {
    const git = { backgroundImage: `url(${gitHub})` };
    const gmail = { backgroundImage: `url(${gMail})` };
    const facebook = { backgroundImage: `url(${FB})` };
    const linkedin = { backgroundImage: `url(${linkedIn})` };
  return (
    <div className={s.footerBlock}>
    <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <Title text={'Ekaterina Vysotskaya'}/>
        <div className={s.links}>
            <div className={s.link} style={git}></div>
            <div className={s.link} style={gmail}></div>
            <div className={s.link} style={facebook}></div>
            <div className={s.link} style={linkedin}></div>
        </div>
        <span className={s.copyrights}>©2022. All rights reserved.</span>
    </div>

</div>
  );
}

export default Footer;
