import React from "react";
import s from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

function Contacts() {
  return (
    <div className={s.contactsBlock}>
        <div className={`${styleContainer.container} ${s.contactsContainer}`}>
            <Title text={'Contacts'}/>

            <form  className={s.contactForm}>
             
                <input type="text" id="fname" name="fname" placeholder="Name"/>
                <input type="text" id="lname" name="lname" placeholder="E-mail"/>
                <textarea placeholder="Your message">
                </textarea>
                <button type='submit' className={s.submitBtn}>SEND MESSAGE</button>
            </form>

            
        </div>
    
    </div>
  );
}

export default Contacts;