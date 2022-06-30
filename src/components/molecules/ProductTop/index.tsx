import { Box, Button, CardActionArea, Typography } from "@mui/material";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import AddIcon from "@mui/icons-material/Add";

type ProductTopProps = {
  name: string;
  description?: string;
  price: string;
  image: string;
};

const ProductTop: FC<ProductTopProps> = ({ name, price, image, description }) => {
  return (
    <Card
      sx={{ display: "flex", borderWidth: 0, borderRadius: 3, position: "relative" }}
      variant="outlined"
    >
      <CardActionArea sx={{ display: "flex", px: 1 }}>
        <CardMedia component="img" sx={{ width: 100 }} image={image} alt={name} />
        <CardContent>
          <Typography component="div" fontWeight={700}>
            {name}
          </Typography>
          <Typography color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography fontWeight="bold" color="primary" component="div" mt={2}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0
        }}
      >
        <Button size="small" variant="contained" color="primary">
          <AddIcon />
        </Button>
      </Box>
    </Card>
  );
};

export { ProductTop };
