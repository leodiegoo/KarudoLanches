import { Box, Button, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type CategoryButtonProps = {
  active?: boolean;
};

const CategoryButton = ({ children, active = false }: PropsWithChildren<CategoryButtonProps>) => {
  return (
    <Box>
      <Button variant={active ? "contained" : "outlined"} size="small">
        <Typography noWrap textTransform="lowercase">
          {children}
        </Typography>
      </Button>
    </Box>
  );
};

export { CategoryButton };
