import React from 'react'
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Js from "../assets/js.svg";
import Rct from "../assets/react.svg";
import Git from "../assets/git.svg";
import GitHub from "../assets/github.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Sass from "../assets/sass.svg";

const Skills = () => {
    return (
        <section className="skills">
            <div className="divSkills">
                <h6>HABILIDADES</h6>
                <h2>Habilidades que más domino</h2>
                <div className="grid-container">
                    <div className="grid-item">
                        <img src={Html} alt="Html" />
                        <h5>HTML</h5>
                    </div>
                    <div className="grid-item">
                        <img src={Css} alt="Css" />
                        <h5>CSS</h5>
                    </div>
                    <div className="grid-item">
                        <img src={Js} alt="JavaScript" />   
                        <h5>JAVASCRIPT</h5>
                    </div>
                    <div className="grid-item">
                        <img src={Rct} alt="React" />    
                        <h5>REACT</h5>
                    </div>
                    <div className="grid-item">
                        <img src={Git} alt="Git" /> 
                        <h5>GIT</h5>
                    </div>
                    <div className="grid-item">
                        <img src={GitHub} alt="GitHub" />  
                        <h5>GITHUB</h5>
                    </div>
                    <div className="grid-item">
                        <img src={Bootstrap} alt="Bootstrap" />    
                        <h5>BOOTSTRAP</h5>
                    </div>
                    <div className="grid-item">
                        <img src={Sass} alt="Sass" /> 
                        <h5>SASS</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills