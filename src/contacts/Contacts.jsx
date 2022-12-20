import React, {useState} from "react";
import s from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {FormikHelpers, useFormik} from "formik";
import axios from "axios";

function Contacts() {
    const [messageSanded, setMessageSanded] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            contacts: '',
            message: ''
        },

        onSubmit: (values, formikHelpers) => {
            axios.post('http://localhost:3010/sendMessage', {
                name: values.name,
                contacts: values.contacts,
                message: values.message
            })
                .then(() => {
                    setMessageSanded(true)
                    formik.resetForm()
                })
        },
    })

    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={'Contacts'}/>
                <Fade top>
                    {
                        messageSanded ?
                            <span className={s.messageSanded}>Thank you for your interest! <br/>I will definitely contact you as soon as I have time.</span>
                            :
                            <form className={s.contactForm} onSubmit={formik.handleSubmit}>
                                <input type="text" className={s.formArea}
                                       placeholder="Name" {...formik.getFieldProps('name')}/>
                                <input type="text" className={s.formArea}
                                       placeholder="E-mail" {...formik.getFieldProps('contacts')}/>
                                <textarea className={s.messageArea}
                                          placeholder="Your message" {...formik.getFieldProps('message')}>
                </textarea>
                                <button type='submit' className={s.submitBtn}
                                        disabled={messageSanded}
                                >SEND MESSAGE</button>
                            </form>}
                </Fade>

            </div>

        </div>
    );
}

export default Contacts;