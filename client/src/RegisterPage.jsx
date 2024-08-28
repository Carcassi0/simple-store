import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" style={{textDecoration:'none', color:'black'}} align="center" {...props}>
      {'Copyright © '}
      <Link to='/' style={{ color:'black'}}>
      Brewchemy.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    palette:{
        background:{
            default: '#EBE3D5'
        },
        text:{
            primary:'#FFFFFF'
        },
    
    }
});

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Link to="/" style={{textDecoration:'none', color:'black'}}>
            <Typography component="h1" sx={{
              fontSize: 'h3.fontSize',
              marginBottom:10,
              marginTop:10}}>
            Brewchemy.</Typography></Link>
          {/* <Typography component="h1" variant="h5" sx={{color: 'text.white'}}>
            Sign in
          </Typography> */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField className='emailInput'
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              label="Email"
              focused
            //   sx={{border: '2px solid white'}}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              focused
            //   sx={{border: '2px solid white'}}
            />
            <FormControlLabel
              control={<Checkbox value="remember"/>}
              label="Remember me" sx={{color:'black'}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'black',border:'2px solid black',
                '&:hover': {
                backgroundColor: 'grey',
                border: '2px solid grey',
                },
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color:'black', textDecoration:'none'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" style={{color:'black',textDecoration:'none'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}
