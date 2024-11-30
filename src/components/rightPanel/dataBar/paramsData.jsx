import { useContext } from "react";
import { CurrentContext } from "..";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";

export const ParamsData = () => {
  const currContext = useContext(CurrentContext)
  
  const handleChange = (key, value, indexRoot) => {
    return currContext.setQueryParams(currContext.queryParams.map((params, index) => (index === indexRoot ? { ...params, [key]: value } : params)));
  };

  return (
    <>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.2em", fontWeight: 600 }}></TableCell>
              <TableCell sx={{ fontSize: "1.2em", fontWeight: 600 }}>Key</TableCell>
              <TableCell sx={{ fontSize: "1.2em", fontWeight: 600 }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currContext.queryParams?.map((row, indexRoot) => (
              <TableRow key={""}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={row?.isSelected}
                    onChange={(e) => handleChange("isSelected", e.target.checked, indexRoot)}
                    inputProps={{
                      "aria-labelledby": "labelId",
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField
                    fullWidth
                    value={row.key}
                    onChange={(e) => handleChange("key", e.target.value, indexRoot)}
                    sx={{
                      height: "50px",
                      "& .MuiInputBase-root": {
                        height: "100%",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        height: "100%",
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField fullWidth value={row.value} onChange={(e) => handleChange("value", e.target.value, indexRoot)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}