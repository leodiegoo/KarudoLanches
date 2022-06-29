import { Box, Button, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";

type CategoryButtonProps = {
  active?: boolean;
};

const CategoryButton = ({ children, active = false }: PropsWithChildren<CategoryButtonProps>) => {
  const [categoryActive, setCategoryActive] = useState(active);

  return (
    <Box>
      <Button
        sx={{
          borderRadius: 999,
          ...(categoryActive ? {} : { borderColor: "white", color: "black" })
        }}
        variant={categoryActive ? "contained" : "outlined"}
        size="medium"
        onClick={() => setCategoryActive((oldCategoryActive) => !oldCategoryActive)}
      >
        <Typography fontWeight="normal" noWrap textTransform="lowercase">
          {children}
        </Typography>
      </Button>
    </Box>
  );
};

export { CategoryButton };
