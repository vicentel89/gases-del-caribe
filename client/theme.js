import { createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#9DB93B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#6ABAC0",
      main: "#244A95",
      contrastText: "#fff",
    },
    openTitle: "#3f4771",
    protectedTitle: pink["400"],
    type: "light",
  },
});

export default theme;
