import { Typography } from "@mui/material";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type ProductPopularProps = {
  description: string;
  price: string;
  image: string;
};

const ProductPopular: FC<ProductPopularProps> = ({ description, price, image }) => {
  return (
    <Card sx={{ minWidth: 160 }} variant="outlined">
      <CardMedia component="img" height="140" image={image} />
      <CardContent sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
        <Typography fontWeight="medium" textAlign="center" variant="body1" noWrap component="div">
          {description}
        </Typography>

        <Typography
          fontWeight="medium"
          color="primary"
          textAlign="center"
          variant="body1"
          noWrap
          component="div"
        >
          {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          fullWidth
          size="small"
          sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, paddingX: 2, paddingY: 1 }}
        >
          <Typography fontSize={10} fontWeight="light">
            Adicionar
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export { ProductPopular };
