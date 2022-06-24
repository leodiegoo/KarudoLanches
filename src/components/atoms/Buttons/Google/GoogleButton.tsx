import Typography from "@mui/material/Typography";

import { Button, createTheme } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

import { ThemeProvider } from "@mui/material/styles";

const googleTheme = createTheme({
  palette: {
    primary: {
      main: "#4285f4",
      contrastText: "#fff"
    },
    secondary: {
      main: "#f44336",
      contrastText: "#fff"
    }
  }
});

const GoogleButton = () => {
  return (
    <ThemeProvider theme={googleTheme}>
      <Button
        startIcon={<GoogleIcon />}
        fullWidth
        size="large"
        variant="contained"
        color="secondary"
      >
        <Typography>Google</Typography>
      </Button>
    </ThemeProvider>
  );
};

export { GoogleButton };
