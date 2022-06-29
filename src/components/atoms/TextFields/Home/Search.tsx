import { InputAdornment, styled, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const TextFieldStyled = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f9f9f9",

    "& fieldset": {
      borderColor: "white"
    }
  }
});

const SearchTextField = () => {
  return (
    <TextFieldStyled
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
  );
};

export { SearchTextField };
