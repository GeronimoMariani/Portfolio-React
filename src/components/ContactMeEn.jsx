import React from 'react'
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const ContactMeEn = () => {

    const {register, handleSubmit,} = useForm();
    const [userName, setUserName] = useState("");

    const datos = (data) => {
        const user = {
            contact: data
        }
        const db = getFirestore();
        const userRef = collection(db, "contactoEn");
        addDoc(userRef, user)
        .then((doc) => {
            setUserName(doc.id);
        })
    }

    if(userName) {
        return window.location = "http://geronimomariani.com.ar/success";
    }

    return (
        <section className="contact">
            <div className="divContacto">
                <h6>CONTACT</h6>
                <h2>Contact me</h2>
            </div>
            <form className="form1" onSubmit={handleSubmit(datos)}>
                <h5>Complete the following form to contact me !</h5>
                <input type="text" placeholder='Enter your name' required {...register("nombre")} />
                <input type="email" placeholder='Enter your e-mail' required {...register("email")} />
                <input type="phone" placeholder='Enter your phone' required {...register("telefono")} />
                <textarea cols="30" rows="10" placeholder='Enter your message' required {...register("textarea")} />
                <button type='submit'>SEND</button>
            </form>
        </section>
    )
}

export default ContactMeEn