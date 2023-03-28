import React, { useState } from 'react';
import logo from '../logo/4logo.png';
import '../pages/drinks/drinks.css';

function Header() {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    {/* <a href="/" className="header-logo">LOGO</a> */}
                    <img className='header-logo' src={logo} alt='logo' />
                </section>
                <section className="order">
                    <button className='order-btn'>Order!</button>
                </section>
            </section>
        </section>
    )
}



export default Header;