import React from 'react'
import Presentation from './Presentation'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ContactMe from './ContactMe'
import Proyects from './Proyects'

const Home = () => {
    return (
        <main>
            <Presentation />
            <AboutMe />
            <Skills />
            <Proyects />
            <ContactMe />
        </main>
    )
}

export default Home