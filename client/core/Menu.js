import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import logo from "./../assets/images/logo-menu.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  logo: { height: 24 },
  logoLink: { marginRight: "auto" },
  paper: {
    color: "#000",
  },
  close: {
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
      1
    )}px auto`,
  },
  listIcon: {
    minWidth: "3rem",
  },
  profileIcon: {
    fontSize: "2.5rem",
  },
  list: {
    width: 250,
  },
  listItem: {
    paddingLeft: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  linkDesktop: {
    textDecoration: "none",
    color: theme.palette.secondary.contrastText,
  },
  active: {
    "& span": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
  },
}));

const isActive = (history, path) => {
  if (history.location.pathname == path) {
    return true;
  } else {
    return false;
  }
};

const Menu = withRouter(({ history }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.logoLink}>
            <img src={logo} className={classes.logo} />
          </Link>
          {isDesktop ? (
            <>
              <Link to="/users">
                <Button
                  className={`${classes.linkDesktop} ${
                    isActive(history, "/users") && classes.active
                  }`}
                >
                  Usuarios
                </Button>
              </Link>

              {!auth.isAuthenticated() ? (
                <span>
                  <Link to="/signup">
                    <Button
                      className={`${classes.linkDesktop} ${
                        isActive(history, "/signup") && classes.active
                      }`}
                    >
                      Registro
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button
                      className={`${classes.linkDesktop} ${
                        isActive(history, "/signin") && classes.active
                      }`}
                    >
                      Iniciar sesion
                    </Button>
                  </Link>
                </span>
              ) : (
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
            </>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        classes={{ paper: classes.paper }}
      >
        <IconButton
          className={classes.close}
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </IconButton>
        <List className={classes.list}>
          <Link to="/users" className={classes.link}>
            <ListItem
              button
              className={`${classes.listItem} ${
                isActive(history, "/users") && classes.active
              }`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ListItemText primary="Usuarios" />
            </ListItem>
          </Link>
          {!auth.isAuthenticated() ? (
            <>
              <Link to="/signup" className={classes.link}>
                <ListItem
                  button
                  className={`${classes.listItem} ${
                    isActive(history, "/signup") && classes.active
                  }`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemText primary="Registro" />
                </ListItem>
              </Link>
              <Link to="/signin" className={classes.link}>
                <ListItem
                  button
                  className={`${classes.listItem} ${
                    isActive(history, "/signin") && classes.active
                  }`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ListItemText primary="Iniciar sesion" />
                </ListItem>
              </Link>
            </>
          ) : (
            <>
              <ListItem
                button
                className={`${classes.listItem} ${
                  isActive(history, "/signup") && classes.active
                }`}
                onClick={() => {
                  setOpen(false);
                  auth.clearJWT(() => history.push("/"));
                }}
              >
                <ListItemText primary="Cerrar sesion" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
});

export default Menu;
