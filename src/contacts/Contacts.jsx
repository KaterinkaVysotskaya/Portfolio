import React from "react";
import s from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
function Contacts() {
  return (
    <div id='contacts' className={s.contactsBlock}>
        <div className={s.container} >
            <Title text={'Contacts'}/>
            <Fade top>
            <form  className={s.contactForm}>
                <input type="text" className={s.formArea} placeholder="Name"/>
                <input type="text" className={s.formArea} placeholder="E-mail"/>
                <textarea className={s.messageArea} placeholder="Your message">
                </textarea>
                <button type='submit' className={s.submitBtn}>SEND MESSAGE</button>
            </form>
            </Fade>
            
        </div>
    
    </div>
  );
}

export default Contacts;