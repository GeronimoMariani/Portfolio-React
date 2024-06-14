import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Presentation = () => {
    return (
        <section className='presentation'>
            <div className="data">
                <h1>Hola! Me llamo Gerónimo</h1>
                <h2>Soy Desarrollador Full Stack</h2>
                <p>Soy de Argentina. Me especializo en diseñar y codear páginas web responsive. Siempre me encuentro practicando mis habilidades o aprendiendo tecnologías nuevas. Actualmente me recibí como desarrollador Full-Stack en la Academia CoderHouse.</p>
                <div className="nets">
                    <a className="icons" href="https://www.linkedin.com/in/geronimo-mariani-a6727626a/" target="_blank"><FaLinkedinIn /></a>
                    <a className="icons" href="https://github.com/GeronimoMariani" target="_blank"><FaGithub /></a>
                    <a className="icons" href="https://mail.google.com/mail/u/0/?fs=1&to=contacto@geronimomariani.com.ar&tf=cm" target="_blank"><GoMail /></a>
                    <a className="icons" href="https://wa.me/+542473472659" target="_blank"><FaWhatsapp /></a>
                </div>
            </div>
        </section>
    )
}

export default Presentation