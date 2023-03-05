
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';




export default function Home() {
  return (
    <div>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <h1>Home</h1>
        <Link to='./userform.js'>
          <Box
            component="img"
            sx={{
              height: 500,
              width: 500,
              maxHeight: { xs: 350, md: 500 },
              maxWidth: { xs: 350, md: 500 },
              '&:hover': {
                backgroundColor: 'black',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            alt="logo"
            src="./images/logo.png"
          />
        </Link>
      </Grid>

    </div>)
}