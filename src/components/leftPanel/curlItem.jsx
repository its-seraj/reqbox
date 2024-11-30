import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Method = ({ type }) => (
  <>
    {type === "GET" ? (
      <div style={{ fontSize: "0.9em", fontWeight: "600", color: "green" }}>{type}</div>
    ) : type === "POST" ? (
      <div style={{ fontSize: "0.9em", fontWeight: "600", color: "orange" }}>{type}</div>
    ) : (
      <></>
    )}
  </>
);
export const CurlItem = ({ currRequest, currFolderId, requestClickHandler }) => {

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton data-requestid={currRequest.requestId} data-folderid={currFolderId} onClick={requestClickHandler}>
          <ListItemIcon>
            <Method type={currRequest.method} />
          </ListItemIcon>
          <ListItemText primary={currRequest.name} />
        </ListItemButton>
      </List>
    </>
  );
};
