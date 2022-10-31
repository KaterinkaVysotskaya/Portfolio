import React from "react";
import s from './Title.module.scss'
import Fade from 'react-reveal/Fade';
function Title(props) {
  return (
            <div className={s.title}>
                <Fade top>
                <h2 >{props.text}</h2>
                </Fade>
            </div>

  );
}

export default Title;
