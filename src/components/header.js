import React, { useState } from 'react';
import logo from '../logo/4logo.png';
import '../pages/drinks/drinks.css';

function Header() {
    // const userName = JSON.parse(localStorage.getItem('usersArray'));
    // console.log(userName);
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    {/* <a href="/" className="header-logo">LOGO</a> */}
                    <img className='header-logo' src={logo} alt='logo' />
                </section>
                <section className="order">

                </section>

            </section>
        </section >
    )
}



export default Header;