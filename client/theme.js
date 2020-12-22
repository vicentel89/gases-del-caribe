import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      paper: "#eee",
    },
    primary: {
      main: "#9DB93B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#6ABAC0",
      main: "#244A95",
      contrastText: "#fff",
    },
    type: "light",
  },
});

export default theme;
