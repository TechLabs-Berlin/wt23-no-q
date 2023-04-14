import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Tooltip from '@mui/material/Tooltip';




export default function Home() {
  return (
    <div>

      <div className='container'>

        <Link to='/userform'>
          {/* <Tooltip title='Hello you extrovert! Welcome in No-Q,click to get in the App!' arrow placement='top'> */}
          <div className='image-container'>
            <img className='logo-img' src='./images/newer_logo.png' alt='logo' />
            <div className='text-overlay'>
              'Hello you extrovert! Welcome in No-Q! Click to get in the App!'
            </div>
          </div>
          {/* 
          </Tooltip> */}
        </Link>
        <h1 className='name-app'>NO-Q</h1>

      </div>

    </div >)

}