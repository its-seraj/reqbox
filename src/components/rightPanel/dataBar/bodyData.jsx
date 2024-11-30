import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Editor } from "./editor";

export const BodyData = () => {
  const [selectedType, setSelectedType] = useState("raw");

  return (
    <>
      <div className="body-menu">
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <FormControlLabel value="none" control={<Radio />} label="none" />
          <FormControlLabel value="form-data" control={<Radio />} label="form-data" />
          <FormControlLabel value="raw" control={<Radio />} label="raw" />
        </RadioGroup>
      </div>
      <div className="body-menu-container">
        {selectedType === "raw" ? (
          <div className="json-editor">
            <Editor />
          </div>
        ) : selectedType === "form-data" ? (
          <></>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
