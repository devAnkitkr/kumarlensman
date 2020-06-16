import React from 'react'
import { Link } from "react-router-dom";
import  Logo from './logo12.svg'

const navStyle={
    color: 'black',
    padding:'5px',
    fontSize:'1.3rem'
}


function Navbar() {
    return (
        <div className='container' >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="#"><img src={Logo} width='190' /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">

                        <Link style={navStyle} to='/'>
                            <li className="nav-item active">
                                Work
                        </li>
                        </Link>

                        <Link style={navStyle}  to='/about'>
                            <li className="nav-item">
                                About
                        </li>
                        </Link>

                        <Link style={navStyle}  to='/contact'>
                            <li className="nav-item">
                                Contact
                        </li>
                        </Link>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
