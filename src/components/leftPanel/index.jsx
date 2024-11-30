import { GlobalStyles } from "./muiStyles";
import { SearchBar } from "./search";
import { Folder } from "./folderStructure";
import "./index.css";
import { useState, useEffect, createContext } from "react";
import { FolderContextMenu } from "../contextMenu";

export const LeftContext = createContext();

export const LeftPanel = ({ currentCurl, setCurrentCurl, currentFolderId, setCurrentFolderId, currentRequestId, setCurrentRequestId }) => {
  const [searchText, setSearchText] = useState("");
  const [foldersData, setFolderData] = useState([]);

  const fetchFolder = async () => {
    try {
      const url = `${window._env_.CODE_SNIPPETS_BACKEND}/folder`;
      const options = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      };

      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setFolderData(data.data);
          }
        });
    } catch (e) {
      console.error("Error occured while fetching folder", e);
    }
  };

  const fetchRequest = async () => {
    try {
      if (!currentRequestId || currentCurl.requestId === currentRequestId) return;
      const url = `${window._env_.CODE_SNIPPETS_BACKEND}/request?requestId=${currentRequestId}`;
      const options = {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      };

      await fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const folderName = foldersData.find((item) => item.folderId === currentFolderId)?.name;
            const curlObject = {
              path: folderName,
              alias: data.data?.name,
              baseUrl: data.data?.url,
              method: data.data.method,
              queryParams: data.data?.queryParams,
              headers: data.data?.headers,
              body: data.data?.body,
              folderId: currentFolderId,
              requestId: currentRequestId,
            };
            setCurrentCurl(curlObject);
          }
        });
    } catch (e) {
      console.error("Error occured while fetching request", e);
    }
  };

  useEffect(() => {
    fetchFolder();
  }, []);
  useEffect(() => {
    console.log("fgbfjdkdf")
    fetchRequest();
  }, [currentRequestId]);

  return (
    <>
      {GlobalStyles}
      <LeftContext.Provider
        value={{
          foldersData,
          setFolderData,
          searchText,
          setSearchText,
          currentFolderId,
          setCurrentFolderId,
          currentRequestId,
          setCurrentRequestId,
          currentCurl,
          setCurrentCurl,
        }}
      >
        <div className="left-root-container">
          <SearchBar />
          <Folder />
          <FolderContextMenu isOpen={false} />
        </div>
      </LeftContext.Provider>
    </>
  );
};
