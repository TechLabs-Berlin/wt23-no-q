import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';




export default function Home() {
  return (
    <div>

      <div className='container'>

        <Link to='/userform'>
          <img className='logo-img' src='./images/newlogo_bigger.png' alt='logo' />
        </Link>

        <h1 className='name-app'>NO-Q</h1>

      </div>

    </div>)
}