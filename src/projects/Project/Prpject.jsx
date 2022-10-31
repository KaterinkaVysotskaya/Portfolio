import React from "react";
import s from './Project.module.scss'
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

function Project(props) {
    return (
        <div className={s.project}>
            <Fade top>
                <Tilt className="Tilt" options={{ max : 25 }}  >
            <div className={s.image} style={props.style}>
                <a href="https://katerinkavysotskaya.github.io/SocialNetwork/" className={s.viewBtn}>Look</a>
            </div>
            <div className={s.fullDescription}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
                </Tilt>
            </Fade>
        </div>
    );
}

export default Project;
