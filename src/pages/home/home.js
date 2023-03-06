import React from 'react';
// import { flexbox } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import './home.css';




export default function Home() {
  return (
    <div>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="flex-start"
        style={{ minHeight: '100vh' }}
      >
        <Grid>
          <Link to='/userform'>
            <img className="logo" src="./images/newlogo_bigger.png" alt="logo" />

          </Link>
        </Grid>
        <Grid>

          <h1 className='app-name'>NO-Q</h1>
        </Grid>
      </Grid>

    </div>)
}