import React from 'react'
import pasion from "../assets/pasionchocolateria.jpg"
import ecommercejs from "../assets/ecommerce-js.jpg"
import ecommercereact from "../assets/ecommerce-react.jpg"
import simplecalculator from "../assets/simplecalculator.jpg"

const ProyectsEn = () => {
    return (
        <section className="proyectos">
            <div className="divProyectos">
                <h6>PROJECTS</h6>
                <h2>The projects I built</h2>
                <div className="grid-container2">
                    <div className="grid-item2 container-fluid">
                        <img src={pasion} alt="Pasion Chocolateria" />
                        <div className="info">
                            <h3>Pasion Chocolateria</h3>
                            <p>Website created for a chocolate shop.</p>
                            <a href="https://pasionchocolateria.com.ar/" target="_blank">More Info</a>
                        </div>
                    </div>
                    <div className="grid-item2 container-fluid">
                        <img src={ecommercejs} alt="Ecommerce Js" />
                        <div className="info">
                            <h3>Ecommerce Js</h3>
                            <p>Ecommerce created with native js.</p>
                            <a href="https://gema-tiendaoficial.netlify.app/" target="_blank">More Info</a>
                        </div>
                    </div>
                    <div className="grid-item2 container-fluid">
                        <img src={ecommercereact} alt="Ecommerce React" />
                        <div className="info">
                            <h3>Ecommerce React Js</h3>
                            <p>Ecommerce created with React js.</p>
                            <a href="https://ecommerce-react-gema.netlify.app/" target="_blank">More Info</a>
                        </div>
                    </div>
                    <div className="grid-item2 container-fluid">
                        <img src={simplecalculator} alt="Simple Calculator" />
                        <div className="info">
                            <h3>Simple Calculator</h3>
                            <p>A simple calculator created with native js.</p>
                            <a href="https://simplecalculatorgm.netlify.app/" target="_blank">Más Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProyectsEn