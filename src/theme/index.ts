import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#B41C1A"
    },
    secondary: {
      main: grey[900]
    }
  }
});

export default theme;
