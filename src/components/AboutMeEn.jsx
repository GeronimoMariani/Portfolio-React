import React from 'react'
import me from "../assets/miFoto.jpg";

const AboutMeEn = () => {
    return (
        <section className="aboutMe">
            <div className="divAboutMe">
                <h6>ABOUT ME</h6>
                <h2>Who I am</h2>
                <p>My name is Geronimo Mariani, I am from Argentina. I have always been in the computer world and it was what I always liked, I consider myself a punctual, orderly, responsible person and I have no problem working in a team.</p>
                <p>I recently became captivated by programming. I started to study at CoderHouse and I am currently a graduate of <a className='certificate' href="https://www.coderhouse.com/ar/certificados/6654d20c33e0360019d4f0de?lang=es" target="_blank">Full Stack Developer.</a> All the time I'm trying to learn new things on my own.</p>
            </div>
            <div className="divImg">
                <img src={me} alt="Foto de perfil" />
            </div>
        </section>
    )
}

export default AboutMeEn