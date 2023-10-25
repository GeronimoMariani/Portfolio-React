import React from 'react'
import pasion from "../assets/pasionchocolateria.jpg"
import ecommercejs from "../assets/ecommerce-js.jpg"
import ecommercereact from "../assets/ecommerce-react.jpg"
import simplecalculator from "../assets/simplecalculator.jpg"

const Proyects = () => {
    return (
        <section className="proyectos">
            <div className="divProyectos">
                <h6>PROYECTOS</h6>
                <h2>Los proyectos que construí</h2>
                <div className="grid-container2">
                    <div className="grid-item2 container-fluid">
                        <img src={pasion} alt="Pasion Chocolateria" />
                        <div className="info">
                            <h3>Pasion Chocolateria</h3>
                            <p>Página web creada para un local de chocolates.</p>
                            <a href="https://pasionchocolateria.com.ar/" target="_blank">Más Info</a>
                        </div>
                    </div>
                    <div className="grid-item2 container-fluid">
                        <img src={ecommercejs} alt="Ecommerce Js" />
                        <div className="info">
                            <h3>Ecommerce Js</h3>
                            <p>Ecommerce creado con js nativo.</p>
                            <a href="https://gema-tiendaoficial.netlify.app/" target="_blank">Más Info</a>
                        </div>
                    </div>
                    <div className="grid-item2 container-fluid">
                        <img src={ecommercereact} alt="Ecommerce React" />
                        <div className="info">
                            <h3>Ecommerce React Js</h3>
                            <p>Ecommerce creado con React js</p>
                            <a href="https://gema-tiendaoficial.netlify.app/" target="_blank">Más Info</a>
                        </div>
                    </div>
                    <div className="grid-item2 container-fluid">
                        <img src={simplecalculator} alt="Simple Calculator" />
                        <div className="info">
                            <h3>Simple Calculator</h3>
                            <p>Una simple calculadora creada con js nativo.</p>
                            <a href="https://simplecalculatorgm.netlify.app/" target="_blank">Más Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects