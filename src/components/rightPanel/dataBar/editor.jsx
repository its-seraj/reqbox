import { useContext } from "react";
import { CurrentContext } from "..";
import MonacoEditor from "@monaco-editor/react";

export const Editor = () => {
  const currContext = useContext(CurrentContext);

  return (
    <>
      <MonacoEditor
        height="100%"
        language="json"
        theme="vs-dark"
        value={currContext.body ? JSON.parse(currContext.body) : ""}
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          padding: {
            top: 10,
            bottom: 10,
          },
        }}
        onChange={(value) => currContext.setBody(JSON.stringify(value))}
      />
    </>
  );
};
