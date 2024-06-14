import React from 'react'
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Js from "../assets/js.svg";
import Rct from "../assets/react.svg";
import Git from "../assets/git.svg";
import GitHub from "../assets/github.svg";
import NodeJs from "../assets/nodejs.svg";
import MongoDb from "../assets/mongodb.svg";

const SkillsEn = () => {
    return (
        <section className="skills">
            <div className="divSkills">
                <h6>SKILLS</h6>
                <h2>Skills I am most proficient in</h2>
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
                        <img src={NodeJs} alt="NodeJs" />    
                        <h5>NODE.JS</h5>
                    </div>
                    <div className="grid-item">
                        <img src={MongoDb} alt="MongoDb" /> 
                        <h5>MONGO DB</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsEn