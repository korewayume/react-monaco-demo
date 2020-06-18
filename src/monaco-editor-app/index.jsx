import React from "react";

import {languageId} from "./hive-language"
import Editor from "@monaco-editor/react";
import useMonaco from "./useMonaco";

const monacoOptions = {
  scrollBeyondLastLine: false,
  theme: languageId,
  fontSize: 12,
  fontFamily: "\"Ubunto Mono\", Menlo, Monaco, \"Courier New\", monospace",
  language: languageId,
  value: ""
}


function MonacoEditor() {
  const {
    monaco,
    editorRef,
    valueRef,
    handleEditorDidMount
  } = useMonaco()

  console.log({
    monaco,
    editorRef,
    valueRef,
  })

  return (
    <Editor
      height="100vh"
      editorDidMount={handleEditorDidMount}
      theme={languageId}
      language={languageId}
      options={monacoOptions}
    />
  );
}

export default MonacoEditor
