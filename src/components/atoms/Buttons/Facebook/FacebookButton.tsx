import Typography from "@mui/material/Typography";

import { Button, createTheme } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import { ThemeProvider } from "@mui/material/styles";
import { signIn } from "next-auth/react";

const facebookTheme = createTheme({
  palette: {
    primary: {
      main: "#3b5998",
      contrastText: "#fff"
    }
  }
});

const FacebookButton = () => {
  return (
    <ThemeProvider theme={facebookTheme}>
      <Button
        onClick={() => signIn("facebook")}
        startIcon={<FacebookIcon />}
        fullWidth
        size="large"
        variant="contained"
      >
        <Typography>Facebook</Typography>
      </Button>
    </ThemeProvider>
  );
};

export { FacebookButton };
