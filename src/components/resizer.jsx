import { useEffect, useState } from "react";
import { LeftPanel } from "./leftPanel";
import { RightPanel } from "./rightPanel";

// {
//   alias: "Sample User",
//   path: "reqres",
//   baseUrl: "https://reqres.in/api/users",
//   method: "GET",
//   queryParams: [
//     {
//       key: "page",
//       value: "2",
//       isSelected: true,
//     }
//   ],
//   headers: [{}
//   ],
//   body: "",
// }
export const Resizer = () => {
  const [dividerPosition, setDividerPosition] = useState(500);
  const [currentCurl, setCurrentCurl] = useState({
    alias: "Sample User",
    path: "reqres",
    baseUrl: "https://b2tenantconfigapi.bamboobox.ai/tenant/get-tenant-config-json10",
    method: "POST",
    queryParams: [{}],
    headers: [
      {
        key: "Cookie",
        value:
          "b2Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVXVpZCI6ImQ0ZjA5ODhjLTkxYzMtNThhYS1hMTdlLTMyYmYzMjllMjc3NiIsInRlbmFudElkIjoiYWFjYTU2M2EtMDVjNi00ODIwLTg4OGEtMWE3ZTBjZmVlNzU3IiwiZW1haWwiOiJzZXJhamtoYW5AYmFtYm9vYm94LmFpIiwibmFtZSI6IlNlcmFqIFIiLCJyb2xlcyI6WyJSb2xlX0Rhc2hib2FyZEluc2lnaHRzIiwiT3Bwb3J0dW5pdHkgTWFuYWdlciIsIlN1cGVyIEFkbWluIiwiU291cmNlZCBhbmQgSW5mbHVlbmNlZCIsIkFkbWluIl0sInN1cGVyVXNlciI6dHJ1ZSwicGVybWlzc2lvbnMiOlt7InJlc291cmNlTmFtZSI6IkNvbnRhY3RIdWJfTGVhZEh1YiIsIm9wZXJhdGlvbnMiOlsiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoiZW1haWxfZ2VuZXJhdG9yIiwib3BlcmF0aW9ucyI6WyJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJhY2NvdW50X2Rhc2hib2FyZCIsIm9wZXJhdGlvbnMiOlsiQWxsIiwiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoiYWNjb3VudF9saXN0X3ZpZXciLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6ImNvbnRhY3RfYWN0aW9uX2xhYmVscyIsIm9wZXJhdGlvbnMiOlsiYWxsIiwiYWRkX2xhYmVsIiwiYWRkX3RvX2NhbXBhaWduIiwiZG93bmxvYWQiLCJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJtYW51YWxfZGF0YV91cGxvYWQiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6Im5ld19hY2NvdW50X2ludGVudCIsIm9wZXJhdGlvbnMiOlsiQWxsIiwiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoiVXNlcnMiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6ImFjY291bnRfYWN0aW9uX2xhYmVscyIsIm9wZXJhdGlvbnMiOlsiYWRkX3RvX2NhbXBhaWduIiwiZG93bmxvYWQiLCJhZGRfbGFiZWwiLCJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJlbnJpY2htZW50X3F1ZXVlIiwib3BlcmF0aW9ucyI6WyJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJ1bmlmaWVkX2FjY291bnRfcHJvZmlsZSIsIm9wZXJhdGlvbnMiOlsiQWxsIiwib3Bwb3J0dW5pdHlIdWIiLCJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJpbnRlZ3JhdGlvbl9zZXR1cCIsIm9wZXJhdGlvbnMiOlsiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoiY2FtcGFpZ25fbWFuYWdlciIsIm9wZXJhdGlvbnMiOlsiYWRkX3JlbW92ZV9jYW1wYWlnbiIsImFkZF9yZW1vdmVfY2FtcGFpZ24iXX0seyJyZXNvdXJjZU5hbWUiOiJjYW1wYWlnbl9odWIiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6ImFjY291bnRfY29udGFjdF9jcmVhdGlvbiIsIm9wZXJhdGlvbnMiOlsiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoid2ViaG9va3Nfc2V0dXAiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6ImV4cG9ydF9tYW5hZ2VyIiwib3BlcmF0aW9ucyI6WyJhZGRfcHJvbXB0cyIsImNvbnRhY3RfZXhwb3J0Il19LHsicmVzb3VyY2VOYW1lIjoic2FsZXNmb3JjZV9zZXR1cCIsIm9wZXJhdGlvbnMiOlsiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoiZGFzaGJvYXJkX2luc2lnaHRzIiwib3BlcmF0aW9ucyI6WyJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJtYXJrZXRpbmdfaW5mbHVlbmNlZCIsIm9wZXJhdGlvbnMiOlsiQWxsIl19LHsicmVzb3VyY2VOYW1lIjoibWFya2V0aW5nX3NvdXJjZWQiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6IndlYl9mb3JtX2ZpbGwiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6InpvaG9fc2V0dXAiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6ImljcF9zY29yZV9jb25maWd1cmF0aW9uIiwib3BlcmF0aW9ucyI6WyJBbGwiXX0seyJyZXNvdXJjZU5hbWUiOiJhdHRyaWJ1dGVfc2V0dXAiLCJvcGVyYXRpb25zIjpbIkFsbCJdfSx7InJlc291cmNlTmFtZSI6InRyZW5kX3JlcG9ydCIsIm9wZXJhdGlvbnMiOlsiQWxsIl19XSwiZGVwYXJ0bWVudCI6IiIsInJlaXNzdWVDb3VudCI6MCwiaXBfYWRkcmVzcyI6IjQ5LjIwNy4yMDYuMTk5IiwiaWF0IjoxNzMyNzMwMDU5LCJleHAiOjE3MzI3MzM2NTl9.buTF1AChMhLuTfh2aj8J7YuAjyGG9JWyrKuIWZB_54k",
        isSelected: true,
      },
    ],
    body: '"{\\r\\n  \\"tenantId\\": \\"aaca563a-05c6-4820-888a-1a7e0cfee757\\",\\r\\n  \\"tool\\": \\"filters\\",\\r\\n  \\"keys\\": [\\r\\n    \\"subfiltersConfig\\"\\r\\n  ]\\r\\n}"',
  });
  const [currentFolderId, setCurrentFolderId] = useState();
  const [currentRequestId, setCurrentRequestId] = useState();

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (e.clientX < 200) {
      setDividerPosition(0);
    } else {
      setDividerPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="resizable-container">
      <div className="left-panel" style={{ width: `${dividerPosition}px` }}>
        <LeftPanel
          currentCurl={currentCurl}
          setCurrentCurl={setCurrentCurl}
          currentRequestId={currentRequestId}
          setCurrentRequestId={setCurrentRequestId}
          currentFolderId={currentFolderId}
          setCurrentFolderId={setCurrentFolderId}
        />
      </div>

      <div className="resizer" onMouseDown={handleMouseDown} style={{ width: "5px" }}></div>

      <div className="right-panel">
        <RightPanel currentCurl={currentCurl} setCurrentCurl={setCurrentCurl} currentFolderId={currentFolderId} currentRequestId={currentRequestId} />
      </div>
    </div>
  );
};
