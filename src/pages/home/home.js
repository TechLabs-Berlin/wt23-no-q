import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';




export default function Home() {
  return (
    <div>

      <div className='container'>

        <Link to='/Form'>

          <img className='logo-img' src='./images/newer_logo.png' alt='logo' />
          {/* <button className='btn-welcome'>Welcome!</button> */}
        </Link>
        <h1 className='name-app'>NO-Q</h1>

      </div>

    </div >)
}