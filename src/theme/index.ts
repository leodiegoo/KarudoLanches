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
    },
    background: {
      default: "#f6f6f6"
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: "#f9f9f9"
        }
      }
    }
  }
});

export default theme;
