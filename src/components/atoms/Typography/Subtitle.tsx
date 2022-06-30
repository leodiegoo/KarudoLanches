import React from "react";

import { Typography } from "@mui/material";

type SubtitleProps = {
  children: React.ReactNode;
};

const SubtitleTypography: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <Typography fontWeight="bold" variant="h5" component="h5">
      {children}
    </Typography>
  );
};

export { SubtitleTypography };
