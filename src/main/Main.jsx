import React, {useCallback} from "react";
import s from './Main.module.scss'
import photo from './../assets/image/mainPhoto.jpg'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {particlesObj} from '../common/styles/ParticlesSettings.js'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
function Main() {
    const mainPhoto = {
        backgroundImage: `url(${photo})`
    };
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
return (
    <div id='main' className={s.mainBlock}>
        <Particles id="tsparticles"
                   className={s.particles} init={particlesInit} loaded={particlesLoaded} options={particlesObj}/>
        <div className={s.container}>
            <Fade top>
            <div className={s.greeting}>
                <span>Hi there!</span>
                <span>I'm Catherine <span>Vysotskaya</span> </span>
                <ReactTypingEffect
                    text={['Frontend Developer']}
                />
            </div>
            <div className={s.photo}>
                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <div  className={s.image} style={mainPhoto}></div>
                </Tilt>

            </div>
            </Fade>
        </div>
    </div>
  );
}

export default Main;
