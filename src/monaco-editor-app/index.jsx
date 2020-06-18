import React, {useState, useRef, useEffect} from "react";
import { monaco as monacoPlugin } from '@monaco-editor/react';

import {init} from './hive-language'
import Editor from "@monaco-editor/react";
const languageId = 'hive-language';
const monacoOptions = {
  scrollBeyondLastLine: false,
  theme: languageId,
  fontSize: 12,
  fontFamily: '"Ubunto Mono", Menlo, Monaco, "Courier New", monospace',
  language: languageId,
  value: ''
}


function MonacoEditor() {
  const editorRef = useRef();
  const [monaco, setMonaco] = useState()
  useEffect(()=>{
    monacoPlugin
      .init()
      .then(monaco => {init(monaco);setMonaco(monaco)})
      .catch(error => console.error('An error occurred during initialization of Monaco: ', error));
  }, [])

  function handleEditorDidMount(_, editor) {
    editorRef.current = editor;
  }


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
