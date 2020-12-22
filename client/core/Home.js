import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import logo from "./../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    maxWidth: "60%",
    marginTop: 24,
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    width: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Bienvenido!
      </Typography>
      <img src={logo} className={classes.media} />
    </div>
  );
}
