import React from 'react'
import  logo  from "../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { Us } from "react-flags-select";
import { Es } from "react-flags-select";


const NavBar = () => {
    return (
        <>
            <header className="headerIndex">
                <div className="divLogo">
                    <Link to="/"><img className="imgLogo" src={logo} alt="Logo" /></Link>
                </div>
                <nav>
                    <ul className="navIdioma">
                        <li><NavLink activeclassname="active" to="/"><Es className='es' /></NavLink></li>
                        <li><NavLink activeclassname="active" to="/home"><Us className='us' /></NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar