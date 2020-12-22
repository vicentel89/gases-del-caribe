import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import logo from "./../assets/images/logo-menu.png";

const useStyles = makeStyles((theme) => ({
  logo: { height: 24 },
}));

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#244A95" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} className={classes.logo} />
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/users">
          <Button style={isActive(history, "/users")}>Usuarios</Button>
        </Link>
        {!auth.isAuthenticated() && (
          <span>
            <Link to="/signup">
              <Button style={isActive(history, "/signup")}>Registro</Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(history, "/signin")}>
                Iniciar sesion
              </Button>
            </Link>
          </span>
        )}
        {auth.isAuthenticated() && (
          <span>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => history.push("/"));
              }}
            >
              Cerrar Sesion
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Menu;
