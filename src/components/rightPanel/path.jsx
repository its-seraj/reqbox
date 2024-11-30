import { useContext } from "react";
import { CurrentContext } from ".";
import { TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

export const Path = () => {
  const currContext = useContext(CurrentContext);
  const folderWidth = Math.max(currContext.path?.length * 12, 50);

  return (
    <>
      <div className="path-root">
        <div className="folderPath">
          <TextField id="path" value={currContext.path} onChange={(e) => currContext.setPath(e.target.value)} sx={{ width: `${folderWidth}px`, "& .MuiOutlinedInput-notchedOutline": { border: "none !important" } }} />
        </div>
        /
        <div className="curlName">
          <TextField
            fullWidth
            id="alias"
            value={currContext.alias}
            onChange={(e) => currContext.setAlias(e.target.value)}
            sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none !important" } }}
          />
        </div>
        <div className="action-btn">
          <button className="save" onClick={currContext.saveCurlHandler}><SaveIcon />Save</button>
          <button className="delete" onClick={currContext.deleteCurlHandler}><DeleteIcon />Delete</button>
        </div>
      </div>
    </>
  );
};
