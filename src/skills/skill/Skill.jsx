import React from "react";
import s from './Skill.module.scss'
import Fade from 'react-reveal/Fade';
function Skill(props) {
    return (
        <div className={s.skill}>
            <Fade top>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
            </Fade>
        </div>
    );
}

export default Skill;