import React from 'react'
import  logo  from "../assets/logo.png";
import { Link } from 'react-router-dom';
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
                        <li><Link to="/"><Es className='es' /></Link></li>
                        <li><Us className='us' /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar