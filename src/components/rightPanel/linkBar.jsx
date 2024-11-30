import { useContext } from "react";
import { CurrentContext } from ".";
import { TextField, InputAdornment } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MethodsSelect } from "./methodSelector"

export const LinkBar = () => {
  const currContext = useContext(CurrentContext);
  console.log("Current context", currContext);

  return (
    <>
      <div className="url-bar-root">
        <TextField
          fullWidth
          id="url-bar"
          label=""
          type="search"
          value={currContext.baseUrl}
          onChange={(e) => currContext.setBaseUrl(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MethodsSelect method={currContext.method} setMethod={currContext.setMethod} />
                <Divider orientation="vertical" flexItem />
              </InputAdornment>
            ),
          }}
        />
        <button className="send" onClick={() => currContext.requestHandler()}>Send</button>
      </div>
    </>
  );
};
