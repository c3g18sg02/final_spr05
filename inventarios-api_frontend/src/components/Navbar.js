import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand">
                
                &nbsp;&nbsp;
                <strong>Home</strong>
            </Link>
            <Link to="/productos" className="btn btn-info btn-md col-xs-2 margin-left">
                Productos    
            </Link>
            <Link to="/perfiles" className="btn btn-info btn-md col-xs-2 margin-left">
            Perfiles
            </Link>
            
            
        </nav>
    )
}
export default Navbar