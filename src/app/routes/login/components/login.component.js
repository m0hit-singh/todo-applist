import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as Actions from "../../../library/security/store/actions";

function LoginComponent() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const pageState = useSelector((state) => state.security);

  const [model, setModel] = useState({});
  const [success, setSuccess] = useState(pageState.success);

  useEffect(() => {
    setSuccess(pageState.success);
  }, [pageState, setSuccess]);

  function handleSubmit() {
    dispatch(Actions.login(model));
  }

  function handleChange(event) {
    event.persist();
    setModel((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  return success ? (
    <Redirect to="/home" />
  ) : (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={7}
        md={3}
        component={Paper}
        elevation={6}
        square
        className={classes.loginForm}
      >
        <div className={classes.paper}>
          <div className={classes.avatar}>
            {/* <img src={logo} alt="log" /> */}
          </div>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="Username"
              autoFocus
              onChange={handleChange}
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
              onChange={handleChange}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // color="primary"
              className={classes.submit}
              disabled={model.password ? false : true}
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
            {/* <Grid container>
              <Grid item xs={12} sm={12} md={12} className={classes.frgot}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid> */}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/assets/bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0071bb",
    color: "white",
  },
  loginForm: {
    maxWidth: "51.2rem",
  },
  frgot: {
    textAlign: "center",
  },
}));

export default LoginComponent;
