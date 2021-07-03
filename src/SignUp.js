import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
     
      <h4 color="inherit" href="#">
        By signing in or creating an account, you agree with our <a href="#" style={{color: "#E99497"}}>Terms & Conditions</a> and <a href="#" style={{color: "#E99497"}}>Privacy Statement</a>
      </h4>{' '}
     
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    
  },
  image: {
    backgroundImage: 'url(./snikpic.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'right',
  },
  paper: {
    margin: theme.spacing(20, 25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '60%', 
    marginTop: theme.spacing(2),
  },
  submit: {
    
    margin: theme.spacing(3, 0, 2),
  },
  languageIcon: {
    borderRadius: "4px",
    backgroundColor: "white", 
    marginBottom: "100px",
    marginLeft: "750px",
    marginTop: "-120px",

  
  },
  link: {
    justifyContent: "center", 
    fontWeight: "500",
    fontColor: "gray",
  },

  signUp: {
    fontWeight: "bold",
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} sm={3} md={3} className={classes.image} />
      <Grid item xs={12} sm={8} md={9} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Fab variant="extended" className={classes.languageIcon}>
            <LanguageIcon className={classes.extendedIcon} />
                En
            <ExpandMoreIcon />
        </Fab>
          <Typography className={classes.signUp} component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm password"
              type="password"
              id="password"
            />
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container className={classes.link} >
              {/* <Grid item xs>
              </Grid> */}
              <Grid item >
                <h4>
                  Already have an account? <a href="#" style={{color: "#E99497"}}>Log In</a>
                </h4>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}