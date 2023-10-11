import React from 'react'
import me from "../assets/miFoto.jpg";

const AboutMe = () => {
    return (
        <section className="aboutMe">
            <div className="divAboutMe">
                <h6>SOBRE MÍ</h6>
                <h2>Quién soy</h2>
                <p>Me llamo Gerónimo Mariani, soy de Argentina. Siempre estuve en el mundo de la informática y fue lo que siempre me gusto, me considero una persona puntual, ordenada, responsable y no tengo problema de trabajar en equipo.</p>
                <p>Recientemente me cautivó la programación. Comencé a estudiar en CoderHouse y actualmente me recibí de Desarrollador Frontend React. Todo el tiempo estoy tratando de aprender cosas nuevas por mi cuenta, y también, actualmente estoy estudiando la carrera Full-Stack.</p>
            </div>
            <div className="divImg">
                <img src={me} alt="Foto de perfil" />
            </div>
        </section>
    )
}

export default AboutMe