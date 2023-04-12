import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Thankyou() {
    const navigate = useNavigate();

    const [isGreen, setIsGreen] = useState(false);
    const [isRed, setIsRed] = useState(false);

    const handleGreenButtonClick = () => {
        setIsRed(false);
        setIsGreen(!isGreen);
        navigate('/thankyou');
    };

    const handleRedButtonClick = () => {
        setIsGreen(false);
        setIsRed(!isRed);
        navigate('/thankyou');
    };
    return (
        <div className="end">
            <h1>
            </h1>
            <h2 className="thank-you">You are ready!Thank you so much for using No-Q!</h2>
            <div class="rating">

                <button className={isGreen ? 'green' : ''} onClick={handleGreenButtonClick}><svg class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall css-ft2su1" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThumbUpAltIcon"><path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"></path></svg>
                    Like
                </button>
                <button className={isRed ? 'red' : ''} onClick={handleRedButtonClick}>
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThumbDownAltIcon"><path d="M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"></path></svg>
                    Dislike
                </button>

            </div>
        </div>
    );

}