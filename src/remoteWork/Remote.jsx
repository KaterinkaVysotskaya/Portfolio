import React from "react";
import s from './Remote.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


function RemoteWork() {
    return (
        <div className={s.remoteBlock}>
            <div className={`${styleContainer.container} ${s.remoteContainer}`}>
                <Title text={'I Am Available For Freelancer'}/>
                <a href='' className={s.remoteBtn}> HIRE ME</a>
            </div>
        </div>
    );
}

export default RemoteWork;
