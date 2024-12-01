import { useState, useEffect, createContext } from "react";
import { Path } from "./path";
import { LinkBar } from "./linkBar";
import { DataBar } from "./dataBar";
import "./index.css";

export const CurrentContext = createContext();

export const RightPanel = (props) => {
  console.log("props inside RightPanel", props);

  const { currentCurl, setCurrentCurl, currentFolderId, currentRequestId } = props;
  const [alias, setAlias] = useState(currentCurl?.alias || "");
  const [path, setPath] = useState(currentCurl?.path || "");
  const [baseUrl, setBaseUrl] = useState(currentCurl?.baseUrl || "");
  const [method, setMethod] = useState(currentCurl?.method || "GET");
  const [queryParams, setQueryParams] = useState(currentCurl?.queryParams || []);
  const [headers, setHeaders] = useState(currentCurl?.headers || []);
  const [body, setBody] = useState(currentCurl?.body || "");
  const [responseData, setResponseData] = useState("");

  const makeRequest = async (url, method = "GET", headers = {}, body = null) => {
    try {
      const payload = {
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body,
      };

      const response = await fetch(`${window._env_.CODE_SNIPPETS_BACKEND}/proxy`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      console.log("Response Data:", data);
      return data;
    } catch (error) {
      console.error("Error making request:", error);
      throw error;
    }
  };

  const requestHandler = async () => {
    const queryUrl = queryParams
      .filter((itr) => itr.isSelected)
      .map((itr) => itr.key + "=" + itr.value)
      .join("&");
    const fullUrl = `${baseUrl}?${queryUrl}`;
    const finalHeaders = headers
      .filter((itr) => itr.isSelected)
      .reduce((a, b) => {
        a[b.key] = b.value;
        return a;
      }, {});
    makeRequest(fullUrl, method, finalHeaders, body)
      .then((response) => {
        console.log("API Response:", response);
        setResponseData(JSON.stringify(JSON.stringify(response, null, 2)));
      })
      .catch((err) => console.error("Request Error:", err));
  };

  const saveCurlHandler = async () => {
    try {
      console.log("savecurlHandler", currentCurl, alias);
      const isChanged =
        alias !== currentCurl?.alias ||
        baseUrl !== currentCurl?.baseUrl ||
        method !== currentCurl?.method ||
        JSON.stringify(queryParams) !== JSON.stringify(currentCurl?.queryParams) ||
        JSON.stringify(headers) !== JSON.stringify(currentCurl?.headers) ||
        body !== currentCurl?.body;
      console.log("savecurlHandler changed happen", isChanged, currentRequestId);

      if (isChanged) {
        const payload = {
          name: alias,
          method,
          url: baseUrl,
          headers,
          queryParams,
          body,
          folderId: currentFolderId,
          requestId: currentRequestId,
        };

        const response = await fetch(`${window._env_.CODE_SNIPPETS_BACKEND}/request`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();

        return data?.success;
      }
    } catch (e) {
      console.error("Error occured while saving curl", e);
      return false;
    }
  };

  const deleteCurlHandler = async () => {
    try {
        const response = await fetch(`${window._env_.CODE_SNIPPETS_BACKEND}/request?requestId=${currentRequestId}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        return data?.success;
    } catch (e) {
      console.error("Error occured while deleteCurlHandler curl", e);
      return false;
    }
  }

  useEffect(() => {
    setAlias(currentCurl?.alias || "");
    setPath(currentCurl?.path || "");
    setBaseUrl(currentCurl?.baseUrl || "");
    setMethod(currentCurl?.method || "GET");
    setQueryParams(currentCurl?.queryParams || []);
    setHeaders(currentCurl?.headers || []);
    setBody(currentCurl?.body || "");
  }, [currentCurl]);

  return (
    <>
      <CurrentContext.Provider
        value={{
          alias,
          setAlias,
          path,
          setPath,
          baseUrl,
          setBaseUrl,
          method,
          setMethod,
          queryParams,
          setQueryParams,
          headers,
          setHeaders,
          body,
          setBody,
          requestHandler,
          responseData,
          setResponseData,
          saveCurlHandler,
          deleteCurlHandler,
        }}
      >
        <div className="right-root-container">
          <Path />
          <LinkBar />
          <DataBar />
        </div>
      </CurrentContext.Provider>
    </>
  );
};
