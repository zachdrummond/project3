import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
// import Copyright from "@material-ui/core/copyright";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          AlgoMaster
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

// 'classes' is a style object found on Login page. Maybe copy/paste or create new style object???
const CredentialsForm = ({classes, handleSubmit, handleInput, username, password}) => {
  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="username"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={handleInput}
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
        value={password}
        onChange={handleInput}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Link to="/signup">New to Ciphr? Sign Up Here!</Link>
      <Box mt={5}>
        <Copyright />
      </Box>
    </form>
  );
};

// specifies type of each prop parameter
CredentialsForm.propTypes = {
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleInput: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
};

export default CredentialsForm;
