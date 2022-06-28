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
import { useSession } from "next-auth/react";
import { CategoryButton } from "@/components/atoms/Buttons/Category/CategoryButton";
import { ProductPopular } from "@/components/molecules/ProductPopular";

const CATEGORIES_MOCK = [
  {
    description: "Promoção: lanches",
    active: true
  },
  {
    description: "Lanches"
  },
  {
    description: "Lanches especiais"
  },
  {
    description: "Churros tradicionais"
  },
  {
    description: "Churros gourmet chocolate"
  },
  {
    description: "Churros leitinho cremoso"
  },
  {
    description: "Churros nutella"
  },
  {
    description: "Churros moça morango nestlé"
  },
  {
    description: "Churros especiais"
  },
  {
    description: "Fondue de churros"
  },
  {
    description: "Porções"
  },
  {
    description: "Refrigerantes lata"
  },
  {
    description: "Refrigerantes 600ML"
  },
  {
    description: "Refrigerantes 1L"
  },
  {
    description: "Refrigerantes 2L"
  },
  {
    description: "Cervejas"
  }
];

const PRODUCTS_MOCK = [
  {
    id: 1,
    description: "X-Burg",
    price: "R$ 10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150"
  },
  {
    id: 2,
    description: "X-Burg",
    price: "R$ 10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150"
  },
  {
    id: 3,
    description: "X-Burg",
    price: "R$ 10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150"
  },
  {
    id: 4,
    description: "X-Burg",
    price: "R$ 10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150"
  },
  {
    id: 5,
    description: "X-Burg",
    price: "R$ 10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150"
  }
];

const Home: NextPage = () => {
  const [address, setAddress] = useState(10);
  const { data: session } = useSession();

  const getRandomPhoto = () => {
    const random = Math.floor(Math.random() * 100);
    return `https://source.unsplash.com/random?sig=${random}`;
  };

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
      <Box display="flex" flexDirection="column" component="main" rowGap={2}>
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
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" component="h6">
            Categorias
          </Typography>
          <Box sx={{ overflowY: "auto" }} display="flex" flexDirection="row" columnGap={1} py={1}>
            {CATEGORIES_MOCK.map((category) => (
              <CategoryButton active={category.active}>{category.description}</CategoryButton>
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" component="h6">
            Popular nessa semana
          </Typography>
          <Box sx={{ overflowY: "auto" }} display="flex" flexDirection="row" columnGap={1} py={1}>
            {PRODUCTS_MOCK.map((product) => (
              <ProductPopular
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))}
          </Box>
        </Box>
      </Box>
      {/* <Box display="flex" flexDirection="row">
        {!session ? (
          <button type="button" onClick={() => signIn()}>
            Sign in
          </button>
        ) : (
          <button type="button" onClick={() => signOut()}>
            Sign out
          </button>
        )}
      </Box> */}
    </Container>
  );
};

export default Home;
