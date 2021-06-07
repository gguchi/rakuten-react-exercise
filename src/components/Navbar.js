import { useState } from 'react';
import './Navbar.css';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function Navbar(){

    const [uName, setName] = useState('NEW USER');

    return(
    <Router>
    <nav id='navbar'>
        <ul>
            <li>
                <Link to="/">Home </Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div className="nav-details">
            <p className="nav-username" > {uName} </p>
        </div>
    </nav>
    </Router>
    );

}

export default Navbar;