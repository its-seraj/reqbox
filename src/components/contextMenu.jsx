import { useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import { LeftContext } from "./leftPanel";

export const FolderContextMenu = ({ isOpen = false }) => {
  const [contextMenu, setContextMenu] = useState(null);
  const [newFolder, setNewFolder] = useState(isOpen);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Escape") {
      setNewFolder(false);
    } else if (e.key === "Enter" && e.target.value?.trim()) {
      try {
        const response = await fetch(`${window._env_.CODE_SNIPPETS_BACKEND}/folder`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: e.target.value.trim() }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Folder created:", data);
          setNewFolder(false);
        } else {
          console.error("Error creating folder");
        }
      } catch (error) {
        console.error("API call failed:", error);
      }
    }
  };

  const handleClose = () => {
    setContextMenu(null);
    setNewFolder(true);
  };

  return (
    <>
      <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu", height: "-webkit-fill-available", marginLeft: "2.2em" }}>
        {newFolder && <TextField fullWidth placeholder="New Folder" onKeyDown={handleKeyDown} />}
        <Menu
          open={contextMenu !== null}
          onClose={() => setContextMenu(null)}
          anchorReference="anchorPosition"
          anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
        >
          <MenuItem onClick={handleClose}>New Folder</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export const RequestContextMenu = ({ folderId, children }) => {
  const LeftContextData = useContext(LeftContext);
  const { foldersData, setFolderData, setCurrentCurl, setCurrentFolderId } = LeftContextData;

  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleCloseRequest = () => {
    setContextMenu(null);
    let folderName, requestName;
    const newFD = foldersData.map((fd) => {
      if (fd.folderId === folderId) {
        folderName = fd.name;
        const count = fd.requests.filter((cf) => cf.name.includes("New Request")).length + 1;
        if (count > 1) {
          requestName = "New Request " + count;
          fd.requests.push({
            method: "GET",
            name: requestName,
          });
        } else {
          requestName = "New Request";
          fd.requests.push({
            method: "GET",
            name: requestName,
          });
        }
      }
      return fd;
    });
    setFolderData(newFD);
    setCurrentFolderId(folderId);
    setCurrentCurl({
      alias: requestName,
      path: folderName,
      baseUrl: "",
      method: "GET",
      queryParams: [{}],
      headers: [{}],
      body: "",
    });
  };

  return (
    <>
      <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu", height: "-webkit-fill-available" }}>
        {children}
        <Menu
          open={contextMenu !== null}
          onClose={() => setContextMenu(null)}
          anchorReference="anchorPosition"
          anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
        >
          <MenuItem onClick={handleCloseRequest}>New Request</MenuItem>
        </Menu>
      </div>
    </>
  );
};
