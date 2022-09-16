import React from "react";
import s from './Project.module.scss'

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <a href="Look" className={s.viewBtn}>Look</a>
            </div>
            <div className={s.fullDescription}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
}

export default Project;
