
import React from "react";
import s from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import socialImage from "../assets/image/social.png";
import photo from './../assets/image/mainPhoto.jpg'

function Main() {
    const mainPhoto = {
        backgroundImage: `url(${photo})`
    };
  return (
    <div className={s.mainBlock}>
        <div className={styleContainer.container}>
            <div className={s.text}>
                <span>Hi there!</span>
                <h1>I'm Catherine Vysotskaya</h1>
                <p>Frontend Developer</p>
            </div>
            <div  className={s.photo} style={mainPhoto}></div>
        </div>
    </div>
  );
}

export default Main;
