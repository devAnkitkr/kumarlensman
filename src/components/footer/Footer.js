import React from 'react'

function Footer() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4 pt-4">
            <a className="navbar-brand" href="#" style={{fontSize:'small'}}>Copyright 2020</a>         
                <ul className="navbar-nav ml-auto" style={{display:'flex',flexDirection:'row'}}>
                    <li className="nav-item active p-1">
                        <a className="nav-link" href="#">Facebook <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="#">Instagram</a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="#">Twitter</a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="#">Flickr</a>
                    </li>
                </ul>  
        </nav>
    )
}

export default Footer
