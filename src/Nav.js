import React, { useEffect, useState } from 'react';
import './Nav.css';
import Netflix_Logo from './Logo_Netflix.png';
import nav__avatar from './nav__avatar.png';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src={Netflix_Logo} 
                alt="Netflix Logo"
            />
            <img 
                className="nav__avatar"
                src={nav__avatar}
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav;
