import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Avatar, Fab, IconButton, MenuItem, Select, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { CategoryButton } from "@/components/atoms/Buttons/Category/CategoryButton";
import { ProductPopular } from "@/components/molecules/ProductPopular";
import { SearchTextField } from "@/components/atoms/TextFields/Home/Search";
import { SubtitleTypography } from "@/components/atoms/Typography/Subtitle";
import { Product } from "@/components/molecules/Product";

const CATEGORIES_MOCK = [
  {
    description: "Promoção: lanches",
    active: false,
    id: 1
  },
  {
    description: "Lanches",
    id: 2
  },
  {
    description: "Lanches especiais",
    id: 3
  },
  {
    description: "Churros tradicionais",
    id: 4
  },
  {
    description: "Churros gourmet chocolate",
    id: 5
  },
  {
    description: "Churros leitinho cremoso",
    id: 6
  },
  {
    description: "Churros nutella",
    id: 7
  },
  {
    description: "Churros moça morango nestlé",
    id: 8
  },
  {
    description: "Churros especiais",
    id: 9
  },
  {
    description: "Fondue de churros",
    id: 10
  },
  {
    description: "Porções",
    id: 11
  },
  {
    description: "Refrigerantes lata",
    id: 12
  },
  {
    description: "Refrigerantes 600ML",
    id: 13
  },
  {
    description: "Refrigerantes 1L",
    id: 14
  },
  {
    description: "Refrigerantes 2L",
    id: 15
  },
  {
    description: "Cervejas",
    id: 16
  }
];

const PRODUCTS_MOCK = [
  {
    id: 1,
    name: "X-Burg",
    description: "Hambúrguer, queijo, presunto, batata palha e maionese",
    price: "R$10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150",
    topOfWeek: true
  },
  {
    id: 2,
    name: "X-Burg",
    description: "Hambúrguer, queijo, presunto, batata palha e maionese",
    price: "R$10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150",
    topOfWeek: false
  },
  {
    id: 3,
    name: "X-Burg",
    description: "Hambúrguer, queijo, presunto, batata palha e maionese",
    price: "R$10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150",
    topOfWeek: true
  },
  {
    id: 4,
    name: "X-Burg",
    description: "Hambúrguer, queijo, presunto, batata palha e maionese",
    price: "R$10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150",
    topOfWeek: true
  },
  {
    id: 5,
    name: "X-Burg",
    description: "Hambúrguer, queijo, presunto, batata palha e maionese",
    price: "R$10,00",
    image: "https://rfm2latam.mcd.com/rfm2OnlineApp/images/27/pt_BR/17%20DLV.png?1628191945150",
    topOfWeek: false
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
    <>
      <Box
        borderBottom="1px solid #E4E4E4"
        display="flex"
        component="header"
        flexDirection="column"
        bgcolor="white"
        marginBottom="1rem"
      >
        <Container maxWidth="sm">
          <Box display="flex" flexDirection="row">
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
              <SearchTextField />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" component="main" rowGap={2}>
          <Box display="flex" flexDirection="column">
            <SubtitleTypography>Categorias</SubtitleTypography>
            <Box sx={{ overflowY: "auto" }} display="flex" flexDirection="row" columnGap={1} py={1}>
              {CATEGORIES_MOCK.map((category) => (
                <CategoryButton key={category.id} active={category.active}>
                  {category.description}
                </CategoryButton>
              ))}
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <SubtitleTypography>Populares</SubtitleTypography>
            <Box sx={{ overflowY: "auto" }} display="flex" flexDirection="row" columnGap={1} py={1}>
              {PRODUCTS_MOCK.map((product) => (
                <ProductPopular
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              ))}
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" paddingBottom={12}>
            <SubtitleTypography>Menu</SubtitleTypography>
            <Box sx={{ overflowY: "auto" }} display="flex" flexDirection="column" rowGap={1}>
              {PRODUCTS_MOCK.sort((a, b) => Number(b.topOfWeek) - Number(a.topOfWeek)).map(
                (product) => (
                  <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    topOfWeek={product.topOfWeek}
                  />
                )
              )}
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
        <Box display="flex" position="fixed" width="100%" justifyContent="center" bottom={16}>
          <Fab size="large" color="primary" variant="extended">
            <Typography textTransform="initial" component="p">
              Finalizar pedido: 2 produtos
            </Typography>
          </Fab>
        </Box>
      </Container>
    </>
  );
};

export default Home;
