import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Avatar,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import AllTenants from "@/components/AllTenants";

const Home: NextPage = () => {
  const [address, setAddress] = useState(10);
  const { data: session } = useSession();

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="row" component="header">
        <Box flexGrow={1}>
          <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
        </Box>
        <Box>
          <IconButton color="primary">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="primary">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" component="main">
        <Box display="flex" flexDirection="column" mt={1}>
          <Typography variant="h4" component="h4">
            Olá, <strong>Leonardo!</strong>
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="body1" component="p">
              Entregar no endereço
            </Typography>
            <Select
              displayEmpty
              sx={{ marginLeft: 1, fontWeight: "bold", color: "primary.main" }}
              size="small"
              autoWidth
              variant="standard"
              value={address}
              onChange={(e) => setAddress(Number(e.target.value))}
            >
              <MenuItem value={10}>Rua dos Bobos, 0</MenuItem>
            </Select>
          </Box>
          <Box>
            <TextField
              margin="normal"
              fullWidth
              placeholder="Pesquisar..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        {!session ? (
          <button type="button" onClick={() => signIn()}>
            Sign in
          </button>
        ) : (
          <button type="button" onClick={() => signOut()}>
            Sign out
          </button>
        )}
      </Box>
      <Box>
        <AllTenants />
      </Box>
    </Container>
  );
};

export default Home;
