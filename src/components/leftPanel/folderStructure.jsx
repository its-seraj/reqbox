import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CurlItem } from "./curlItem";
import { LeftContext } from ".";
import { RequestContextMenu } from "./../contextMenu";

export const Folder = () => {
  const LeftDataContext = useContext(LeftContext);
  console.log("left data context", LeftDataContext);

  const { foldersData, setCurrentCurl, setCurrentFolderId, setCurrentRequestId } = LeftDataContext;

  const requestClickHandler = (e) => {
    setCurrentFolderId(e.currentTarget.getAttribute("data-folderid"));
    setCurrentRequestId(e.currentTarget.getAttribute("data-requestid"));

    if (!e.currentTarget.getAttribute("data-requestid")) {
      const folderId = e.currentTarget.getAttribute("data-folderid");

      const folderName = foldersData.find((fd) => fd.folderId === folderId)?.name;
      const requestName = e.currentTarget.querySelector(".MuiListItemText-primary").textContent;
      setCurrentCurl({
        alias: requestName,
        path: folderName,
        baseUrl: "",
        method: "GET",
        queryParams: [{}],
        headers: [{}],
        body: "",
      });
    }
  };

  return (
    <>
      <div className="folder-root">
        {foldersData.map((currFolder, index) => (
          <Accordion key={index}>
            <RequestContextMenu folderId={currFolder.folderId}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#aaa" }} />} aria-controls="panel1-content" id="panel1-header">
                {currFolder?.name} ({currFolder?.requests?.length || 0})
              </AccordionSummary>
            </RequestContextMenu>
            <AccordionDetails>
              {currFolder?.requests?.length > 0 &&
                currFolder.requests.map((currRequest) => <CurlItem key={currRequest.name} currRequest={currRequest} currFolderId={currFolder.folderId} requestClickHandler={requestClickHandler} />)}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};
