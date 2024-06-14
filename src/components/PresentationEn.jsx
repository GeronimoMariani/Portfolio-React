import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const PresentationEn = () => {
    return (
        <section className='presentation'>
            <div className="data">
                <h1>Hi, my name is Geronimo</h1>
                <h2>I'm a Full Stack Developer</h2>
                <p>I'm from Argentina. I specialize in responsive web design and coding. I'm always practicing my skills or learning new technologies. Currently I graduated as a Full-Stack developer at CoderHouse Academy.</p>
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

export default PresentationEn