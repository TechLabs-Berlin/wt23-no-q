import React, { useState } from 'react';
import logo from '../logo/4logo.png';
import '../pages/drinks/drinks.css';
import { Outlet, Link } from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function Header() {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    {/* <a href="/" className="header-logo">LOGO</a> */}
                    <img className='header-logo' src={logo} alt='logo' />
                </section>
                <section className="order">
                    <Link to="/profile">
                        <button className="navButtons">
                            Get in Q!

                            <AccountCircleIcon />

                        </button>
                    </Link>
                </section>

            </section>
        </section >
    )
}



export default Header;