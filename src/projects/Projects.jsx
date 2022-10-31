import React from "react";
import s from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Prpject";
import Title from "../common/components/title/Title";
import socialImage from './../assets/image/social.png'
import todoImage from './../assets/image/todo.png'

function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todo = {
        backgroundImage: `url(${todoImage})`
    };
    return (
        <div id='projects' className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={social}
                             title={'Name of project 1'}
                             description={'description of project 1'}/>
                    <Project style={todo}
                             title={'Name of project 2'}
                             description={'description of project 2'}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
