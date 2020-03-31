import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat"
  },
  palette: {
    primary: {
      main: "#fffb00"
    },
    secondary: {
      main: "#7a7a7a"
    },
    text: {
      primary: "#000"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#232f3e"
    }
  }
});

export default theme;
