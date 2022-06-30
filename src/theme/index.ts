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
  typography: {
    fontFamily: ["Nunito", "Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(",")
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
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "rgba(0, 0, 0, 0.1) rgba(255, 255, 255, .5)",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "rgba(255, 255, 255, .5)",
            borderRadius: 99,
            height: 6,
            width: 6
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 99,
            backgroundColor: "rgba(0, 0, 0, 0.1)"
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#959595"
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#959595"
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#959595"
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "rgba(255, 255, 255, .5)"
          }
        }
      }
    }
  }
});

export default theme;
