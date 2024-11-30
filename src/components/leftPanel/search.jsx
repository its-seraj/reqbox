import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

export const SearchBar = () => {
  return (
    <>
      <TextField
        fullWidth
        id="search-bar"
        label=""
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#888" }} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
