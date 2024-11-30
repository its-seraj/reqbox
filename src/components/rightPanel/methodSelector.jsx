import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MethodsSelect = ({ method, setMethod }) => {
  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={method}
        onChange={handleChange}
        IconComponent={ExpandMoreIcon}
        sx={{
          width: "120px",
          "& .MuiOutlinedInput-notchedOutline": { border: "0 !important" },
          "& .MuiOutlinedInput-root": {
            "&:hover, &:active, &:focus": {
              "& fieldset": {
                border: "0px solid var(--border) !important",
              },
            },
          },
        }}
      >
        <MenuItem value={"GET"}>GET</MenuItem>
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"PUT"}>PUT</MenuItem>
        <MenuItem value={"PATCH"}>PATCH</MenuItem>
        <MenuItem value={"DELETE"}>DELETE</MenuItem>
        <MenuItem value={"HEAD"}>HEAD</MenuItem>
        <MenuItem value={"OPTIONS"}>OPTIONS</MenuItem>
      </Select>
    </>
  );
};