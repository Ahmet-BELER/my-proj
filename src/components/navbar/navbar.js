import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {


    const openMenu = () => {
        const menu = document.querySelector("#mobile-menu");
        const menuLinks = document.querySelector(".navbar__menu");

        menu.addEventListener("click", () => {
            menuLinks.classList.toggle("active")
            menu.classList.toggle("is-active")
        })
    }

    

        

        return (
            //  < !--Navbar Section-- >
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" href="#home" id="navbar__logo">Lord Beler</Link>

                    <div className="navbar__toggle" id="mobile-menu" onClick={openMenu} >
                        <span className="bar"> </span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                    <ul className="navbar__menu">

                        <li className="navber__item">
                            <Link to="/" href="home" className="navbar__links" id="home-page">Home</Link>
                        </li>

                        <li className="navber__item">
                            <Link to="/product" href="#about" className="navbar__links" id="product-page">Product</Link>
                        </li>

                        <li className="navber__item">
                            <Link to="/about" href="#services" className="navbar__links" id="about-page">About Us</Link>
                        </li>

                        <li className="navber__item">
                            <Link to="/contact" href="#services" className="navbar__links" id="contact-page">Contact</Link>
                        </li>

                        <li className="navber__btn">
                            <Link to="/signup" href="#sign-up" className="button" id="signup">Sign up</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    
}

export default Navbar;