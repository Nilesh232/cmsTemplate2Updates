import React from "react";
import { useHistory } from "react-router";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import { authStart, authSuccess } from "./Services/Actions/actions";
import { connect } from "react-redux";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },

  paper: {
    margin: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const classes = useStyles();
  let history = useHistory();
  const [loading, setLoading] = React.useState(false);

  const loginUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    const username = event.target.username.value //test134@gmail.com;
    const password = event.target.password.value //test112123;
    const userType = 'service-admin';
    const schoolName = 'http://localhost:3000';
    const templateSelected = 'template1';

    // props.onAuth(username, password, schoolName);

    props.authStart()
    await fetch('https://2awm5p4tdd.execute-api.ap-south-1.amazonaws.com/get-user',  {
        "method": "POST",
        "header":{
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({
          "userId": username,
          "password": password,
          "userType": userType
        })
      })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if(!!data.Count === true && !!data.Items === true && data.Items.length > 0) {
          data.Items.map((userObj) => (
            props.onAuthSucess(userObj['user_id']['S'], userObj['user_type']['S'], schoolName, templateSelected)
          ))
          let parts = props.location.pathname.split("/");
          const place = parts[parts.length - 1];
          parts = parts.slice(1, 2);
          if(userType === 'super-admin' || userType === 'service-admin') {
            history.push("/" + parts + "/template");
          } else if(userType === 'school-admin') {
            history.push("/" + parts + templateSelected + '/home');
          }
        } else if(data === 'User not found') {
          alert('Incorrect email');
        } else {
          alert('Incorrect Password');
        }
    }).catch((e) => {
      setLoading(false);
      alert(e);
    })
  };

  return (
    <>
      <Grid
        container
        component="main"
        className={classes.root}
        style={{
          
        }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={loginUser}>
              <div className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="username"
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="password"
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />

<InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
          native
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {!loading && "login".toLocaleUpperCase()}
                  {loading && <CircularProgress size={20} color="inherit" />}
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
      error: state.authR.error,
      isAuth: state.authR.auth,
      authRedirectPath: state.authR.authRedirectPath
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      authStart: () => dispatch(authStart()),
      onAuthSucess: (userId, userType, schoolName, templateSelected) => dispatch(authSuccess(userId, userType, schoolName, templateSelected))
      // onAuthRedirectPath: () => dispatch(authRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
