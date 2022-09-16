import React from "react";
import s from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import socialImage from "../assets/image/social.png";
import htmlIcon from '../assets/image/icons/htmlIcon.png'
import JS from '../assets/image/icons/jsIcon.svg'
import TS from '../assets/image/icons/typescriptIcon.svg'
import REACT from '../assets/image/icons/reactIcon.svg'
import REDUX from '../assets/image/icons/reduxIcon.svg'
import FORMIK from '../assets/image/icons/formIcon.svg'
import MUI from '../assets/image/icons/material-ui.svg'
import REST from '../assets/image/icons/apiIcon.svg'
import CSS from '../assets/image/icons/cssIcon.svg'

function Skills() {
    const html = {backgroundImage: `url(${htmlIcon})`};
    const css = {backgroundImage: `url(${CSS})`};
    const js = {backgroundImage: `url(${JS})`};
    const ts = {backgroundImage: `url(${TS})`};
    const react = {backgroundImage: `url(${REACT})`};
    const redux = {backgroundImage: `url(${REDUX})`};
    const mui = {backgroundImage: `url(${MUI})`};
    const formik = {backgroundImage: `url(${FORMIK})`};
    const rest = {backgroundImage: `url(${REST})`};
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill style={js} title={'JS'} description={'My JS-description'}/>
                    <Skill style={html} title={'HTML'} description={'My HTML description'}/>
                    <Skill style={css} title={'CSS'} description={'My CSS description'}/>
                    <Skill style={ts} title={'TS'} description={'My TS description'}/>
                    <Skill style={react} title={'REACT'} description={'My REACT description'}/>
                    <Skill style={redux} title={'REDUX'} description={'My REDUX description'}/>
                    <Skill style={mui} title={'Material UI'} description={'My Material UI description'}/>
                    <Skill style={formik} title={'Formik'} description={'My Formik description'}/>
                    <Skill style={rest} title={'REST-API'} description={'My REST-API description'}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
