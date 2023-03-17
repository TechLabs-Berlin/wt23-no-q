import './LoadingScreen.css';
import React, { useState } from 'react';
import logo from '../logo/logo1.svg';


export default function LoadingScreen(animationDelay) {

    const [visible, setVisible] = useState(true);
    console.log(visible)

    setTimeout(() => {
        setVisible(false);
    }, 1000
    );

    if (visible === true) {
        return (
            <div
                className="loadingScreen"
                style={{ 'animationDelay': `${animationDelay}ms` }}
            >
                <img src={logo} alt="logo" className='load-logo' />
                <h1>Welcome to No-Q</h1>
            </div>
        );
    }
    else return null;

};

