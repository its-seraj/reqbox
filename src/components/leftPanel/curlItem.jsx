import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Method = ({ type }) => {
  const getTypeStyle = (type) => {
    switch (type) {
      case "GET":
        return { fontSize: "0.9em", fontWeight: "600", color: "green" };
      case "POST":
        return { fontSize: "0.9em", fontWeight: "600", color: "orange" };
      case "PUT":
        return { fontSize: "0.9em", fontWeight: "600", color: "blue" };
      case "PATCH":
        return { fontSize: "0.9em", fontWeight: "600", color: "purple" };
      case "DELETE":
        return { fontSize: "0.9em", fontWeight: "600", color: "red" };
      case "HEAD":
        return { fontSize: "0.9em", fontWeight: "600", color: "brown" };
      case "OPTIONS":
        return { fontSize: "0.9em", fontWeight: "600", color: "gray" };
      default:
        return null;
    }
  };

  const style = getTypeStyle(type);

  return style ? <div style={style}>{type}</div> : null;
};

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
