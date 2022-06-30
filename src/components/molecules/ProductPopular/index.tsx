import { Box, IconButton, Typography, CardActionArea } from "@mui/material";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { grey } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";

type ProductPopularProps = {
  name: string;
  description?: string;
  price: string;
  image: string;
};

const ProductPopular: FC<ProductPopularProps> = ({ name, price, image }) => {
  return (
    <Card
      sx={{ minWidth: 150, borderWidth: 0, borderRadius: 3, position: "relative" }}
      variant="outlined"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 999
        }}
      >
        <IconButton sx={{ color: grey[500] }} aria-label="adicionar aos favoritos">
          <FavoriteIcon />
        </IconButton>
      </Box>
      <CardActionArea>
        <CardMedia component="img" height="110" image={image} />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            fontWeight="bold"
            color={grey[800]}
            variant="body1"
            noWrap
            component="div"
            textAlign="center"
          >
            {name}
          </Typography>

          <Typography
            color="primary"
            textAlign="center"
            fontWeight="bold"
            variant="body1"
            noWrap
            component="div"
          >
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { ProductPopular };
