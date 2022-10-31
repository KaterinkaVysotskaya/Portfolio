import React from "react";
import s from './Footer.module.scss'
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import gMail from "../assets/image/contactIcons/mailIcon.svg";
import gitHub from "../assets/image/contactIcons/gitIcon.svg";
import FB from "../assets/image/contactIcons/facebook.svg";
import linkedIn from "../assets/image/contactIcons/linkedin.svg";
import vkIcon from "../assets/image/contactIcons/vk.svg";
import tgIcon from "../assets/image/contactIcons/tg.svg";

function Footer() {
    // const git = { backgroundImage: `url(${gitHub})` };
    // const gmail = { backgroundImage: `url(${gMail})` };
    // const facebook = { backgroundImage: `url(${FB})` };
    // const linkedin = { backgroundImage: `url(${linkedIn})` };
    // const vk = { backgroundImage: `url(${vkIcon})` };
    // const tg = { backgroundImage: `url(${tgIcon})` };
    return (
        <div className={s.footerBlock}>
            <Fade top>
                <div className={s.container}>
                    <Title text={'Ekaterina Vysotskaya'}/>
                    <div className={s.links}>
                        <div className={s.link}><a href="https://github.com/KaterinkaVysotskaya"><img src={gitHub}
                                                                                                      alt=""/></a></div>
                        <div className={s.link}><a href=""><img src={gMail} alt=""/></a></div>
                        <div className={s.link}><a
                            href="https://free.facebook.com/profile.php?eav=AfZPB15Fz7bG-iBs-DBEL14svIc9alA3xoIIWJdGrW1Ld9wG-272ZsCm29B_swXlnRM&refid=7&paipv=0"><img
                            src={FB} alt=""/></a></div>
                        <div className={s.link}><a href="https://linkedin.com/in/ekaterina-vysotskaya-93a459243"><img
                            src={linkedIn} alt=""/></a>
                        </div>
                        <div className={s.link}><a href="https://vk.com/vysotskaya.katya"><img src={vkIcon} alt=""/></a>
                        </div>
                        <div className={s.link}><a href=""><img src={tgIcon} alt=""/></a></div>
                    </div>
                    <span className={s.copyrights}>©2022. All rights reserved.</span>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
