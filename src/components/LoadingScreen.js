import './LoadingScreen.css';
import React, { useState } from 'react';


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
                <h1>LOADING SCREEN</h1>
            </div>
        );
    }
    else return null;

};

