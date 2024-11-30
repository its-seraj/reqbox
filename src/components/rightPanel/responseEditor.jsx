import { useContext } from "react";
import { CurrentContext } from ".";
import MonacoEditor from "@monaco-editor/react";

export const ResponseEditor = () => {
  const currContext = useContext(CurrentContext);

  return (
    <>
      <MonacoEditor
        height="100%"
        language="json"
        theme="vs-dark"
        value={currContext.responseData ? JSON.parse(currContext.responseData) : ""}
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          padding: {
            top: 10,
            bottom: 10,
          },
        }}
      />
    </>
  );
};
