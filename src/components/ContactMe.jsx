import React from 'react'
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const ContactMe = () => {

    const {register, handleSubmit,} = useForm();
    const [userName, setUserName] = useState("");

    const datos = (data) => {
        const user = {
            contact: data
        }
        const db = getFirestore();
        const userRef = collection(db, "contacto");
        addDoc(userRef, user)
        .then((doc) => {
            setUserName(doc.id);
        })
    }

    if(userName) {
        return window.location = "http://geronimomariani.com.ar/exito";
    }

    return (
        <section className="contact">
            <div className="divContacto">
                <h6>CONTACTO</h6>
                <h2>Contáctame</h2>
            </div>
            <form className="form1" onSubmit={handleSubmit(datos)}>
                <h5>Completa el siguiente formulario para contactarte conmigo !</h5>
                <input type="text" placeholder='Ingresá tu nombre' required {...register("nombre")} />
                <input type="email" placeholder='Ingresá tu e-mail' required {...register("email")} />
                <input type="phone" placeholder='Ingresá tu teléfono' required {...register("telefono")} />
                <textarea cols="30" rows="10" placeholder='Ingrese su mensaje' required {...register("textarea")} />
                <button type='submit'>ENVIAR</button>
            </form>
        </section>
    )
}

export default ContactMe