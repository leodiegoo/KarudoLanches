import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { grey } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";

type ProductPopularProps = {
  description: string;
  price: string;
  image: string;
};

const ProductPopular: FC<ProductPopularProps> = ({ description, price, image }) => {
  return (
    <Card
      sx={{ minWidth: 150, borderWidth: 0, borderRadius: 3, position: "relative" }}
      variant="outlined"
    >
      <CardMedia component="img" height="110" image={image} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0
        }}
      >
        <IconButton sx={{ color: grey[500] }} aria-label="adicionar aos favoritos">
          <FavoriteIcon />
        </IconButton>
      </Box>
      <CardContent sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
        <Typography fontWeight="medium" color={grey[800]} variant="body1" noWrap component="div">
          {description}
        </Typography>

        <Typography fontWeight="medium" variant="body1" noWrap component="div">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { ProductPopular };
